/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      },
      {
        protocol: "https",
        hostname: "rb.gy",
        port: "",
        pathname: "/g1pwyx",
      },
    ],
  },
};
