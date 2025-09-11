/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
    optimizePackageImports: ["lucide-react"] // 👈 prune le code inutilisé des icônes
  },
  images: { domains: ["images.unsplash.com", "cdn.pixabay.com"] },
  async redirects() {
    return [
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
