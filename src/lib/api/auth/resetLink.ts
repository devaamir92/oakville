export const sendResetLink = async (email: string) => {
  const payload = {
    email,
  };
  try {
    const res = await fetch(
      `${process.env.API_HOST}/api/v1/auth/forgot-password`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};
