/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://reynoldputra.com',
  generateRobotsTxt: true, // (optional)
  exclude: ["/sandbox/*"]
}
