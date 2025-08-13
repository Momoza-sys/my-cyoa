import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX({
  plugins: [require('@tailwindcss/typography')],
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
