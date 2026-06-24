import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/how-much-to-tip-in-the-us",
        destination: "/blog/tipping-guide-usa",
        permanent: true,
      },
      {
        source: "/blog/how-to-read-your-paycheck",
        destination: "/blog/how-to-calculate-take-home-pay",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
