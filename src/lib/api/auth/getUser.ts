import { getSession } from '@lib/getsession';

export const getUser = async () => {
  const session = await getSession();
  try {
    const res = await fetch(`${process.env.API_HOST}/api/v1/auth/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.user?.token}`,
      },
    });
    const userData = await res.json();
    return userData;
  } catch (error: any) {
    throw new Error(error);
  }
};
