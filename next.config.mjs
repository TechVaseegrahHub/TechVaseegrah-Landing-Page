/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // ✅ fixed typo
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com', // ✅ fixed typo
      },
    ],
  },
  webpack(config) {
    // Find the existing rule handling SVG files
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Rule to handle *.svg?url imports using file-loader
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // only *.svg?url
      },
      // Rule to transform all other SVG imports into React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
        use: ['@svgr/webpack'],
      }
    );

    // Exclude *.svg from the default file loader
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
