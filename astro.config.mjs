import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tolbxela.com',
  integrations: [sitemap()],
  build: {
    assets: 'assets'
  }
});
