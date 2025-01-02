/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co'], // Add the domain(s) you want to allow for image loading
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
