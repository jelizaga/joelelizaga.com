import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://joelelizaga.com/",
  integrations: [
    solidJs(),
    mdx(),
  ],
  markdown: {
    syntaxHighlight: 'prism',
  }
});