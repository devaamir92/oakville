import AuthProvider from '@providers/auth-provider';

export default function coreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
