/** @type {import('next').NextConfig} */

const withLess = require('next-with-less');

module.exports = withLess({
  // reactStrictMode: true,
  lessLoaderOptions: {},
  images: {
    domains: ['media.kitsu.io', 'kitsu.io', 'avatars.slack-edge.com'],
    formats: ['image/avif', 'image/webp'],
  },
});
