////////////////////////////////////////////////////////////////////////////////
// /src/pages/blog/rss.xml.js //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// RSS XML feed for the blog located in `/src/blog`.
// Page found @ `/blog/rss.xml`.

import rss from '@astrojs/rss';

export const get = () => rss({
  title: "Joel Elizaga · Blog",
  description: "A UX engineer's blog.",
  site: "https://joelelizaga.com/blog",
  items: import.meta.glob("../../blog/*.mdx"),
  customData: "<language>en-us</language>",
  // stylesheet: "../../style/rss.xls",
});