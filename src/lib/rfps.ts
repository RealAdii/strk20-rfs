import "server-only";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import type { RFP, RFPFrontmatter } from "./rfps-types";

export type { RFP, RFPFrontmatter, Genre } from "./rfps-types";
export { GENRES, genreLabel } from "./rfps-types";

const CONTENT_DIR = path.join(process.cwd(), "content", "rfps");

export async function readAllRfps(): Promise<RFP[]> {
  const files = await fs.readdir(CONTENT_DIR);
  const mdx = files.filter((f) => f.endsWith(".mdx"));
  const rfps = await Promise.all(
    mdx.map(async (f) => {
      const raw = await fs.readFile(path.join(CONTENT_DIR, f), "utf8");
      const { data, content } = matter(raw);
      return { ...(data as RFPFrontmatter), content };
    })
  );
  return rfps.sort((a, b) => a.ideaNumber.localeCompare(b.ideaNumber));
}

export async function readRfp(slug: string): Promise<RFP | null> {
  const all = await readAllRfps();
  return all.find((r) => r.slug === slug) ?? null;
}
