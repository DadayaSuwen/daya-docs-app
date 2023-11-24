/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    }) // 针对 SVG 的处理规则
    return config
  }
}

module.exports = nextConfig
