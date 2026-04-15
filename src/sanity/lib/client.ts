import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2024-01-01";

// Sanity Project IDs can only contain a-z, 0-9 and dashes
export const isConfigured = Boolean(projectId) && 
                            projectId !== "your_project_id" && 
                            /^[a-z0-9-]+$/.test(projectId);

// Read-only client for fetching data in components
// We only initialize if projectId is present to avoid runtime crashes
export const client = isConfigured 
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    })
  : null;

// Write client for API routes (mutations)
export const writeClient = (isConfigured && process.env.SANITY_API_TOKEN)
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
    })
  : null;

// Image URL builder helper that handles unconfigured client gracefully
const builder = client ? imageUrlBuilder(client) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    // Return a dummy object or handle fallback in component
    return {
      auto: () => ({ fit: () => ({ url: () => "" }) }),
      image: () => ({ url: () => "" }),
      url: () => "",
    };
  }
  return builder.image(source);
}

/**
 * Safe fetch wrapper to avoid "client of null" errors
 */
export async function safeFetch<T>(query: string, params: any = {}): Promise<T[]> {
  if (!client) {
    console.warn("Sanity client is not configured. Returning empty set.");
    return [];
  }
  return client.fetch(query, params);
}
