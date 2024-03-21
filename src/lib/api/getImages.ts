export const getImages = async (mls: string) => {
  const res = await fetch(`${process.env.API_HOST}/api/v1/stream/${mls}`, {
    method: 'GET',
    next: {
      tags: [mls],
    },
    cache: 'no-cache',
  });
  return res.json();
};
