import fs from "node:fs/promises";

export async function getMdSlugs(folder: string) {
  const files = await fs.readdir(folder);
  const slugs = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
    .map((filename) => filename.split("/").pop())
    .filter((slug): slug is string => slug !== undefined);
  return slugs;
}
