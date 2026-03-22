// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'idktheflag docs',
      customCss: [
        // We will add your Neovim/Terminal aesthetic CSS here later
      ],
      sidebar: [
        {
          label: 'CTF Writeups',
          autogenerate: { directory: 'writeups' },
        },
        {
          label: 'Infrastructure',
          autogenerate: { directory: 'infra' },
        }
      ],
    }),
  ],
});
