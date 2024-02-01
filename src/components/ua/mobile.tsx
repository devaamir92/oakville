import { userAgent } from 'next/server';
import { headers } from 'next/headers';

const Mobile: React.FC<React.PropsWithChildren> = ({ children }) => {
  const headersList = headers();
  const { device, os } = userAgent({ headers: headersList });

  if (device.type === 'mobile' || device.type === 'tablet') return children;

  if (os.name?.includes('Android')) return children;

  if (os.name?.includes('iOS')) return children;

  return null;
};

export default Mobile;
