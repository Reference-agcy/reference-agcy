/** @type {import('next').NextConfig} */

const nextConfig = {
 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "el7addad-backend.o-projects.org",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*{/}?",
        headers: [
          {
            key: "X-Accel-Buffering",
            value: "no",
          },
        ],
      },
      {
        source: "/ar/:path*{/}?",
        headers: [
          {
            key: "X-Accel-Buffering",
            value: "no",
          },
        ],
      },
      {
        source: "/en/:path*{/}?",
        headers: [
          {
            key: "X-Accel-Buffering",
            value: "no",
          },
        ],
      },
      // Add more language-specific rules here if needed
    ];
  },
};

module.exports = nextConfig;
