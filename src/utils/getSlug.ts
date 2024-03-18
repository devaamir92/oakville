const getSlug = (
  s_r: string,
  status: string,
  community: string,
  slug: string
) => {
  if (s_r === 'Sale') {
    return `/homes-for-sale/${community
      .toLowerCase()
      .replaceAll(' ', '-')}/${slug}`;
  }
  if (s_r === 'Lease') {
    return `/homes-for-rent/${community
      .toLowerCase()
      .replaceAll(' ', '-')}/${slug}`;
  }
  if (status === 'U') {
    return `/sold-homes/${community
      .toLowerCase()
      .replaceAll(' ', '-')}/${slug}`;
  }
  return '';
};

export default getSlug;
