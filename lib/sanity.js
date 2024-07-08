import { createClient } from "next-sanity";
const { projectId, dataset } = require("@/sanity/env");

// sanity client configuration
export default createClient({
  projectId: projectId,
  dataset: dataset,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2023-07-08",
  useCdn: true,
});
