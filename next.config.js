/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  // 如果您有其他的 Next.js 設定，請保留它們
  i18n,
};

module.exports = nextConfig;