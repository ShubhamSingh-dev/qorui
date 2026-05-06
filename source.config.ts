import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { pageSchema, metaSchema } from "fumadocs-core/source/schema";


export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: pageSchema.extend({
      // your extra doc fields here, e.g.:
      // index: z.boolean().default(false),
    }),
  },
  meta: {
    schema: metaSchema.extend({
      // your extra meta fields here
    }),
  },
});

export default defineConfig();