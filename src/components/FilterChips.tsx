"use client";

import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import { GENRES, type Genre } from "@/lib/rfps-types";

type Props = {
  counts: Record<Genre | "all", number>;
};

export function FilterChips({ counts }: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const active = (params.get("genre") ?? "all") as Genre | "all";

  const setGenre = (id: Genre | "all") => {
    const next = new URLSearchParams(params.toString());
    if (id === "all") next.delete("genre");
    else next.set("genre", id);
    const qs = next.toString();
    router.replace(qs ? `/?${qs}` : `/`, { scroll: false });
    document.getElementById("ideas")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const chips: { id: Genre | "all"; label: string }[] = [
    { id: "all", label: "All" },
    ...GENRES,
  ];

  return (
    <div
      className="sticky top-16 z-30 bg-field/90 backdrop-blur-md border-b border-line"
      role="tablist"
      aria-label="Filter ideas by genre"
    >
      <div className="container-content py-4 flex flex-wrap justify-center items-center gap-2">
        {chips.map((c) => {
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setGenre(c.id)}
              className={clsx(
                "inline-flex items-center gap-2 px-4 h-9 rounded-full text-sm transition-colors",
                isActive
                  ? "bg-white text-field font-medium"
                  : "border border-line text-body hover:border-muted hover:text-white"
              )}
            >
              <span>{c.label}</span>
              <span
                className={clsx(
                  "font-mono text-xs",
                  isActive ? "text-field/60" : "text-muted"
                )}
              >
                {counts[c.id] ?? 0}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
