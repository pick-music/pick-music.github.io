require('dotenv').config({path: `.env.${process.env.APP_ENV}`})


/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.ASSET_PREFIX || '',
  basePath: process.env.BASE_PATH || '',

  output: process.env.OUTPUT || 'standalone',
}

module.exports = nextConfig

