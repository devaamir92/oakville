'use server';

import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';

import { z } from 'zod';

import type { ErrorResponse } from '@interfaces';

import { apiClient } from './apiclient';

const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
});

export type User = Partial<z.infer<typeof loginSchema>>;

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d') // 7 days
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export const login = async (
  _currentState: unknown,
  fromData: FormData
): Promise<ErrorResponse> => {
  const validation = loginSchema.safeParse(
    Object.fromEntries(fromData.entries())
  );

  if (!validation.success) {
    return { status: 400, errors: validation.error.formErrors.fieldErrors };
  }

  try {
    const res = await apiClient.post('/api/v1/auth/login', validation.data);

    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7); // 7 days
    const session = await encrypt({ user: res.data, expires });
    cookies().set('session', session, { expires, httpOnly: true });
    return res.data;
  } catch (error: any) {
    return {
      status: error.status,
      message: error.message,
    };
  }
};

export async function logout() {
  // Destroy the session
  cookies().set('session', '', { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return decrypt(session);
}

export async function updateSession(user: any) {
  const session = cookies().get('session')?.value;
  if (!session) return;

  const parsed = await decrypt(session);

  parsed.user.name = user.name;
  parsed.user.verified = user.verified;

  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7); // 7 days
  const newSession = await encrypt({ user: parsed.user, expires });
  cookies().set('session', newSession, { expires, httpOnly: true });
}
