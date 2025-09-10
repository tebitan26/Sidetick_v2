/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: {} },
  images: { domains: ["images.unsplash.com", "cdn.pixabay.com"] },

  async redirects() {
    return [
      // Redirige sidetick.app → www.sidetick.app (toutes les pages)
      {
        source: "/:path*",
        has: [{ type: "host", value: "sidetick.app" }],
        destination: "https://www.sidetick.app/:path*",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
