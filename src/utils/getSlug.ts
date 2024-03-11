const getSlug = (
  s_r: string,
  status: string,
  community: string,
  slug: string
) => {
  if (s_r === 'Sale') {
    return `/property-for-sale/${community
      .toLowerCase()
      .replaceAll(' ', '-')}/${slug}`;
  }
  if (s_r === 'Lease') {
    return `/property-for-rent/${community
      .toLowerCase()
      .replaceAll(' ', '-')}/${slug}`;
  }
  if (status === 'U') {
    return `/sold-properties/${community
      .toLowerCase()
      .replaceAll(' ', '-')}/${slug}`;
  }
  return '';
};

export default getSlug;
