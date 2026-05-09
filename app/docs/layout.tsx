import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "../layout.config";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template:
      "%s | Qorui - Free UI Components to build beautiful websites",
    default: "Qorui - Free UI Components to build beautiful websites",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}
      sidebar={{defaultOpenLevel: 1}}
    >
      {children}
    </DocsLayout>
  );
}
