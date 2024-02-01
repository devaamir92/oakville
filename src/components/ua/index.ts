import { userAgent } from 'next/server';
import { headers } from 'next/headers';

import Desktop from './desktop';
import Mobile from './mobile';

const desktop = () => {
  const headersList = headers();
  const { device, os } = userAgent({ headers: headersList });

  if (device.type === 'desktop') return true;

  if (os.name?.includes('Mac OS')) return true;

  if (os.name?.includes('Windows')) return true;

  if (os.name?.includes('Linux')) return true;

  if (os.name?.includes('Ubuntu')) return true;

  return false;
};

export { Desktop, Mobile, desktop };
