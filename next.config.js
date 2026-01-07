const createMDX = require('@next/mdx');
const remarkGfm = require('remark-gfm');


/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  env: {
    HOST: process.env.HOST,
    SERVER_HOST: process.env.SERVER_HOST,
  },
  images: {
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
      },
    ],
  },
  experimental: {
    mdxRs: true,
  },
};


const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
  },
  extension: /\.(md|mdx)$/,
});


module.exports = withMDX(nextConfig);
