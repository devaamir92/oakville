import ClintButton from './_components/ClintButton';

const getPost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
  });
  return response.json();
};

const Page = async () => {
  const posts = await getPost();
  return (
    <div className="flex max-w-96 flex-col items-center gap-4 py-10">
      {posts.map((post: any) => (
        <div
          key={post.id}
          className="flex flex-col items-start justify-start gap-4 rounded-md bg-gray-100 p-4"
        >
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
          <ClintButton id={post.id} />
        </div>
      ))}
    </div>
  );
};

export default Page;
