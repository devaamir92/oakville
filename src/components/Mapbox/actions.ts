export async function popupDetail(slug: string) {
  const res = await fetch(
    `${process.env.API_HOST}/api/v1/property/slug/${slug}`,
    {
      method: 'GET',
      next: {
        tags: [slug],
      },
      cache: 'no-cache',
    }
  );
  const property = await res.json();

  return property;
}
