const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");

module.exports = (phase) => {
  const DOMAIN = process.env.DOMAIN_API;
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  let removeConsole = {
    exclude: ["error"],
  };
  if (isDev) removeConsole = false;

  async function rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: DOMAIN + "/api/:path*",
      },
      {
        source: "/img/:path*",
        destination: DOMAIN + "/img/:path*",
      },
    ];
  }

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compress: false,
    rewrites,
    optimizeFonts: true,
    compiler: {
      removeConsole,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "fakestoreapi.com",
          port: "",
          pathname: "/img/**",
        },
      ],
    },
  };

  return nextConfig;
};
