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
        playfair: 'var(--font-playfair)',
      },
    },
  },
  plugins: [tints],
};
export default config;
