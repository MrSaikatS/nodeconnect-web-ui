/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
        pathname: "/public/**",
      },
      {
        protocol: "http",
        hostname: "192.168.29.10",
        pathname: "/assets/**",
      },
      // {
      //   protocol: "http",
      //   hostname: "localhost",
      //   pathname: "/assets/**",
      // },
    ],
  },
};

export default nextConfig;
