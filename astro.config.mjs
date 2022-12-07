import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    solidJs(),
    mdx(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ],
  markdown: {
    syntaxHighlight: 'prism',
  }
});