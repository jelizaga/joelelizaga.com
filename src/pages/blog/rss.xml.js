import rss from '@astrojs/rss';

export const get = () => rss({
  title: "Joel Elizaga | Blog",
  description: "A UX engineer's blog.",
  site: "https://joelelizaga.com/blog",
  items: import.meta.glob("../../blog/*.mdx"),
  customData: "<language>en-us</language>",
});