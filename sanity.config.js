import { defineConfig } from "sanity";
import { dataset, projectId } from "./sanity/env.js";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schema";

export default defineConfig({
  title: "uqie-next-portfolio",
  projectId: "v0rot0ju",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes
  },
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
});
