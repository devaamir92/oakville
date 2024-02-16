import BlogToolbar from './_components/BlogToolbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col">
      <BlogToolbar />
      {children}
    </main>
  );
}
