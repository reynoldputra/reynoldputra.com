const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  env : {
    HOST : process.env.HOST,
    SERVER_HOST : process.env.SERVER_HOST
  }
}

module.exports = withMDX(nextConfig)
