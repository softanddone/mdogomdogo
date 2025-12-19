
// import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap';
// import partytown from '@astrojs/partytown';

// export default defineConfig({
//   site: 'https://mdogomdogodeals.co.ke',
//   integrations: [
//     sitemap({
//       changefreq: 'weekly',
//       priority: 0.7,
//       lastmod: new Date(),
//       customPages: [
//         'https://www.mdogomdogodeals.co.ke/iphone-17-pro-max-vs-samsung-25-ultra',
//         'https://www.mdogomdogodeals.co.ke/samsung-galaxy-a07'
//       ]
//     }),
//     partytown({ config: { forward: ['dataLayer.push'] }})
//   ],
//   compressHTML: true,
//   build: { inlineStylesheets: 'auto' }
// });


import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://mdogomdogodeals.co.ke',

  // ✅ ONLY redirect /product/*
  redirects: {
    '/product/:path(.*)': '/:path',
  },

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://www.mdogomdogodeals.co.ke/iphone-17-pro-max-vs-samsung-25-ultra',
        'https://www.mdogomdogodeals.co.ke/samsung-galaxy-a07'
      ]
    }),
    partytown({ config: { forward: ['dataLayer.push'] } })
  ],

  compressHTML: true,
  build: { inlineStylesheets: 'auto' }
});
