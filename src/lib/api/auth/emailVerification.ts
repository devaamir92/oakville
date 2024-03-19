import { updateUser } from './updateUser';

// export const getUser = async () => {
export const verifyEmailAddress = async (key: string) => {
  const payload = { key };
  try {
    const res = await fetch(
      `${process.env.API_HOST}/api/v1/auth/verify-email`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );
    const responce = await res.json();
    if (responce.success) {
      await updateUser();
    }
    return responce;
  } catch (err) {
    return err;
  }
};
