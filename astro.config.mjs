import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.masyconsulting.com',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) =>
        !/^\/(about|fractional-hr|business-writing|industry-analysis|contact)(\/|$)/.test(
          new URL(page).pathname
        ),
    }),
  ],
});
