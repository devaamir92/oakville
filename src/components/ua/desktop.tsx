import { userAgent } from 'next/server';
import { headers } from 'next/headers';

const Desktop: React.FC<React.PropsWithChildren> = ({ children }) => {
  const headersList = headers();
  const { device, os } = userAgent({ headers: headersList });

  if (device.type === 'desktop') return children;

  if (os.name?.includes('Mac OS')) return children;

  if (os.name?.includes('Windows')) return children;

  if (os.name?.includes('Linux')) return children;

  if (os.name?.includes('Ubuntu')) return children;

  return null;
};

export default Desktop;
