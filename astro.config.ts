import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://thatverygeorge.github.io',
  base: '/resume',
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Iosevka',
      cssVariable: '--font-iosevka',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/Iosevka-Regular.woff2'],
            weight: 'normal',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/Iosevka-Bold.woff2'],
            weight: 'bold',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
