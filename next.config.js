/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    HOST : process.env.HOST,
    SERVER_HOST : process.env.SERVER_HOST
  }
}

module.exports = nextConfig
