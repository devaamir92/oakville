import React, { Suspense } from 'react';

import Pagination from '@components/ui/Pagination';
import BlogToolbar from '@app/(blogfiles)/_components/BlogToolbar';
import { getAllBlogs } from '@lib/api/getBlogs';
import BlogCard from '@components/BlogCard';
import Loader from '@components/Loader';

interface BlogPageProps {
  params: { slug: string };
  searchParams: any;
}

const BlogPage: React.FC<BlogPageProps> = async ({ params, searchParams }) => {
  const blogs: any = await getAllBlogs(
    params.slug.toString().split('-').join(' '),
    Number(searchParams?.page) || 1
  );

  return (
    <div className="flex h-full flex-col">
      <BlogToolbar />
      <div className="min-h-[calc(100vh-118px)]">
        {!blogs.data.length && (
          <div className="flex h-[calc(100vh-118px)] items-center justify-center">
            <h1 className="text-xl font-semibold text-gray-500 md:text-2xl">
              No blogs found for this category
            </h1>
          </div>
        )}
        {blogs.data.length > 0 && (
          <section className="py-5">
            <div className="container flex flex-col">
              <div className="flex items-center justify-between">
                <h1 className="mb-3 flex-1 text-center text-xl font-semibold capitalize md:text-2xl">
                  {params.slug.toString().split('-').join(' ')}
                </h1>
              </div>
              <div className="mb-4 h-[1px] bg-gray-300" />
              <Suspense
                key={searchParams?.page ?? '1'}
                fallback={
                  <div className="flex h-[calc(100vh-225px)] items-center justify-center">
                    <Loader />
                  </div>
                }
              >
                <div className="mb-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
                  {blogs.data.map((blog: any) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
                {blogs?.pageCount > 1 && (
                  <Pagination
                    totalPages={blogs.pageCount}
                    currentPage={blogs.page}
                    location="/blog"
                  />
                )}
              </Suspense>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
