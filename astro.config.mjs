// // @ts-check
// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});

// import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap';

// export default defineConfig({
//   site: 'https://mdogomdogodeals.co.ke',
//   integrations: [sitemap()],
//   compressHTML: true,
// });


import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://mdogomdogodeals.co.ke',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://www.mdogomdogodeals.co.ke/iphone-17-pro-max-vs-samsung-25-ultra',
        'https://www.mdogomdogodeals.co.ke/product/samsung-galaxy-a07'
      ]
    }),
    partytown({ config: { forward: ['dataLayer.push'] }})
  ],
  compressHTML: true,
  build: { inlineStylesheets: 'auto' }
});

