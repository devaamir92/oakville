import { Open_Sans, Poppins } from 'next/font/google';

import cn from '@utils/cn';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
});

const opensans = Open_Sans({
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-opensans',
});

export default cn(opensans.variable, poppins.variable);
