import tailwindTints from 'tailwind-tints';
import type { Config } from 'tailwindcss';

const tints = tailwindTints({
  primary: '#195d45',
  secondary: '#ECDBC7',
  tertiary: '#343a4a',
});

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,css}'],
  theme: {
    extend: {
      colors: {},

      container: {
        center: true,
        padding: '1rem',
      },
      fontFamily: {
        poppins: 'var(--font-poppins)',
        opensans: 'var(--font-opensans)',
      },
    },
  },
  plugins: [tints],
};
export default config;
