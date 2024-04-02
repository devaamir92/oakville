import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { httpClient } from '@lib/httpclient';

export const getAllBlogs = async (category?: string, page?: number) => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder
    .setJoin({
      field: 'image',
    })
    .setFilter({
      field: 'publish',
      operator: '$eq',
      value: true,
    })
    .setJoin({
      field: 'categories',
      select: ['category'],
    });

  queryBuilder.search({
    $or: [
      {
        title: {
          $contL: category,
        },
      },
      {
        'categories.category': {
          $contL: category,
        },
      },
    ],
  });

  queryBuilder.setPage(page ?? 1);

  const res = await httpClient.get(`/api/v1/blogs?${queryBuilder.query()}`, {
    next: {
      tags: ['blogs'],
    },
  });
  return res;
};

export const getRecentBlogs = async (slug: string) => {
  const queryBuilder = RequestQueryBuilder.create();
  queryBuilder
    .setJoin({
      field: 'image',
    })
    .setFilter({
      field: 'slug',
      operator: '$ne',
      value: slug,
    })
    .setFilter({
      field: 'publish',
      operator: '$eq',
      value: true,
    })
    .setJoin({
      field: 'categories',
      select: ['category'],
    })
    .setLimit(4);
  const res = await httpClient.get(`/api/v1/blogs?${queryBuilder.query()}`, {
    next: {
      tags: ['blogs'],
    },
  });
  return res;
};

export const getSingleBlog = async (slug: string) => {
  const queryBuilder = RequestQueryBuilder.create();
  queryBuilder
    .setJoin({
      field: 'image',
      select: ['images'],
    })
    .setJoin({
      field: 'categories',
      select: ['category'],
    });
  const res = await httpClient.get(
    `/api/v1/blogs/slug/${slug}?${queryBuilder.query()}`,
    {
      next: {
        tags: ['slug'],
      },
    }
  );
  return res;
};

export const getBlogMetaData = async (slug: string) => {
  const queryBuilder = RequestQueryBuilder.create();
  queryBuilder
    .setJoin({
      field: 'image',
      select: ['images'],
    })
    .select(['metaTitle', 'metaDesc', 'jsonLD', 'faqSchema', 'keywords']);

  const res = await httpClient.get(
    `/api/v1/blogs/slug/${slug}?${queryBuilder.query()}`,
    {
      next: {
        tags: ['slug'],
      },
    }
  );
  return res;
};
