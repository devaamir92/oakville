import tailwindTints from 'tailwind-tints';
import type { Config } from 'tailwindcss';

const tints = tailwindTints({
  primary: '#375329',
  secondary: '#ECDBC7',
});

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,css}'],
  theme: {
    extend: {
      colors: {},

      container: {
        center: true,
      },
      fontFamily: {
        gilroy: 'var(--font-gilroy)',
        poppins: 'var(--font-poppins)',
        opensans: 'var(--font-opensans)',
      },
    },
  },
  plugins: [tints],
};
export default config;
