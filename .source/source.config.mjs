// source.config.ts
import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { pageSchema, metaSchema } from "fumadocs-core/source/schema";
var docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: pageSchema.extend({
      // your extra doc fields here, e.g.:
      // index: z.boolean().default(false),
    })
  },
  meta: {
    schema: metaSchema.extend({
      // your extra meta fields here
    })
  }
});
var source_config_default = defineConfig();
export {
  source_config_default as default,
  docs
};
