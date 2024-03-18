export const resetPassword = async (password: string, key: string) => {
  const payload = {
    password,
    key,
  };
  try {
    const res = await fetch(
      `${process.env.API_HOST}/api/v1/auth/reset-password`,
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return await res.json();
  } catch (error: any) {
    throw new Error(error);
  }
};
