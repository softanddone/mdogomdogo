import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://mdogomdogodeals.co.ke',
  
  integrations: [
    sitemap({
      // Dynamic lastmod per page instead of static date
      serialize(item) {
        // Prioritize homepage and main sections
        if (item.url === 'https://mdogomdogodeals.co.ke/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (item.url.includes('/offers')) {
          item.priority = 0.9;
          item.changefreq = 'daily';
        } else if (item.url.match(/\/(iphone|samsung)/)) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        return item;
      },
      filter: (page) => !page.includes('/admin') && !page.includes('/draft'),
      customPages: [
        'https://mdogomdogodeals.co.ke/iphone-17-pro-max-vs-samsung-25-ultra',
        'https://mdogomdogodeals.co.ke/samsung-galaxy-a07',
        'https://mdogomdogodeals.co.ke/offers'
      ]
    }),
    
    partytown({
      config: {
        forward: ['dataLayer.push'],
        // Optimize third-party script loading
        resolveUrl: (url) => {
          const proxyUrl = new URL('https://cdn.builder.io/api/v1/proxy-api');
          proxyUrl.searchParams.append('url', url.href);
          return proxyUrl;
        }
      }
    })
  ],
  
  // Enable HTML compression
  compressHTML: true,
  
  build: {
    inlineStylesheets: 'auto',
    // Additional performance optimizations
    assets: '_astro',
    assetsPrefix: undefined,
  },
  
  // Improve asset optimization
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    }
  }
});