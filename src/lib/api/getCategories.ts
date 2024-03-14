export async function getCategories() {
  const res = await fetch(`${process.env.API_HOST}/api/v1/categories`, {
    method: 'GET',
    next: {
      tags: ['categories'],
    },
    cache: 'no-cache',
  });
  return res.json();
}
