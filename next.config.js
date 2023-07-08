/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: [
        'en_US',
        'zh_CN',
        'zh_TW',
        'ja_JP',
        'eo_ZZ'
    ],
    defaultLocale: 'en_US',
  }
}

module.exports = nextConfig
