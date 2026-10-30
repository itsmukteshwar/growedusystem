import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — generates plain HTML/CSS/JS in `out/` that any CDN can serve.
  output: "export",
  // Static export cannot optimise images at request-time; serve them as-is.
  images: { unoptimized: true },
  // Netlify (and most static hosts) expect /about/ rather than /about.html.
  trailingSlash: true,
  // Turbopack CSS loader — only active during `next dev`, ignored in prod builds.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
