// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "components/action-search-bar.mdx": () => import("../content/docs/components/action-search-bar.mdx?collection=docs"), "components/avatar-picker.mdx": () => import("../content/docs/components/avatar-picker.mdx?collection=docs"), }),
};
export default browserCollections;