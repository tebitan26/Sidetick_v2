/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: {} },
  images: { domains: ["images.unsplash.com", "cdn.pixabay.com"] },
};
export default nextConfig;
