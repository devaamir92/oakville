import { getSession } from '@lib/getsession';

const token = await getSession();

export async function getNewDevelopment() {
  const response = await fetch(
    `${process.env.API_HOST}/api/v1/development/project`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.user.token}`,
      },
      next: {
        tags: ['project'],
      },
      cache: 'no-cache',
    }
  );
  const data = await response.json();

  return data;
}
