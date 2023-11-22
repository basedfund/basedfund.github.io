/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Add your Next.js configuration options here */
  /* For example: */

  // Specify the directory where the output should be exported
  distDir: 'build',

  // Customize the behavior of webpack (if needed)
  webpack: (config, { isServer }) => {
    // Modify webpack configuration here
    return config;
  },
  images: {
    domains: ['https://ssrlandingpagebedrock-z7zjub2fnq-ew.a.run.app'],
  },

  // Add other configurations as per your project's needs
};

module.exports = nextConfig;
