const getSlug = (community: string, slug: string) => {
  return `/${community.toLowerCase().replaceAll(' ', '-')}/${slug}`;
};

export default getSlug;
