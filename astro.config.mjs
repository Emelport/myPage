// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/myPage/', // 👈 usa exactamente el nombre de tu repo aquí
  vite: {
    plugins: [tailwindcss()]
  },
});