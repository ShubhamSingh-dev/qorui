import type { Metadata } from "next";
import type { ReactNode } from "react";

const siteConfig = {
  name: "Qorui",
  description: "Open-source component library for modern web apps",
  url: "https://qorui.dev",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,
};

type HomeLayoutProps = {
  children: ReactNode;
};

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      {/* <Header /> */}
      <main className="relative w-full pt-0 md:pt-0">{children}</main>
      {/* <Footer /> */}
    </>
  );
}

