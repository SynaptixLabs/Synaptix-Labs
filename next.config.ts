import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination:
          process.env.NEXT_PUBLIC_PAPYRUS_BLOG_URL ||
          "https://papyrus.synaptixlabs.ai/articles/@synaptixlabs",
        permanent: true,
      },
      {
        source: "/papers",
        destination:
          process.env.NEXT_PUBLIC_PAPYRUS_BLOG_URL ||
          "https://papyrus.synaptixlabs.ai/articles/@synaptixlabs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
