import { z, defineCollection, reference } from 'astro:content';

const collectionTags = defineCollection({
  type: 'data',
  schema: z.object({
    tag: z.string(),
    description: z.string().optional()
  }),
});

const collectionBlog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    tags: z.array(reference('tags')).optional(),
    pubDate: z.date(),
    updDate: z.date().optional(),
  }),
});

const collectionProjects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    headerImgSrc: image().optional(),
    tags: z.array(reference('tags')).optional(),
    url: z.string().url().optional(),
    github: z.string().url().optional(),
    license: z.string().optional(),
    licenseUrl: z.string().url().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  'blog': collectionBlog,
  'projects': collectionProjects,
  'tags': collectionTags,
};