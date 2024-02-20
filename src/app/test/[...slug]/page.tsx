import BackButton from '@components/BackButton';

const getPost = async (id: Number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: 'GET',
    }
  );
  return response.json();
};

const page = async ({ params }: any) => {
  const post = await getPost(params.slug);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <BackButton />
    </div>
  );
};

export default page;
