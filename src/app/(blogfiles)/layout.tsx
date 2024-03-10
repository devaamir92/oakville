import BlogToolbar from './_components/BlogToolbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full flex-col">
      <BlogToolbar />
      <div className="min-h-[calc(100vh-118px)]">{children}</div>
    </main>
  );
}
