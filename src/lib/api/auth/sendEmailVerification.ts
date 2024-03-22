import { getSession } from '@lib/getsession';

export const sendEmailVerification = async () => {
  const token = await getSession();

  try {
    const res = await fetch(
      `${process.env.API_HOST}/api/v1/auth/verify-email`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token.user.token}`,
        },
        next: {
          tags: ['auth'],
        },
        cache: 'no-cache',
      }
    );
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};
