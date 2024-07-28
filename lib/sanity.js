import { client } from "@/sanity/lib/client";
import urlBuilder from "@sanity/image-url";
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

const builder = urlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}