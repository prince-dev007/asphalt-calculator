/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["https://images.unsplash.com"], // Add your domain or IP address here
  },
};

module.exports = nextConfig;
