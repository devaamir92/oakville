'use server';

import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);

async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return decrypt(session);
}
