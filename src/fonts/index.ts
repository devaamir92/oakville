import localFont from 'next/font/local';
import { Playfair_Display } from 'next/font/google';

import cn from '@utils/cn';

const gilroy = localFont({
  src: [
    {
      path: '/gilroy/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/gilroy/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '/gilroy/Gilroy-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '/gilroy/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '/gilroy/Gilroy-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '/gilroy/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-playfair',
});

export default cn(gilroy.variable, playfair.variable);
