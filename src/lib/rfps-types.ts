export type Genre =
  | "markets-trading"
  | "payments-money"
  | "infrastructure"
  | "social-communications"
  | "gaming";

export const GENRES: { id: Genre; label: string }[] = [
  { id: "markets-trading", label: "Markets & Trading" },
  { id: "payments-money", label: "Payments & Money" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "social-communications", label: "Social & Communications" },
  { id: "gaming", label: "Gaming" },
];

export type RFPFrontmatter = {
  title: string;
  slug: string;
  ideaNumber: string;
  genre: Genre;
  pitch: string;
  primitives: string[];
  publishedAt: string;
};

export type RFP = RFPFrontmatter & { content: string };

export function genreLabel(id: Genre): string {
  return GENRES.find((g) => g.id === id)?.label ?? id;
}
