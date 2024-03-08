import { z, defineCollection } from 'astro:content';

const collectionBlog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    tags: z.array(z.string()).optional(),
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
    tags: z.array(z.string()).optional(),
    url: z.string().url().optional(),
    github: z.string().url().optional(),
    license: z.string().optional(),
    licenseUrl: z.string().url().optional(),
    draft: z.boolean().optional(),
  })
})

export const collections = {
  'blog': collectionBlog,
  'projects': collectionProjects
};