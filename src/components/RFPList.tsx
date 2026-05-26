"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { genreLabel, type RFP } from "@/lib/rfps-types";

export function RFPList({ rfps }: { rfps: RFP[] }) {
  const params = useSearchParams();
  const active = params.get("genre");
  const visible = active ? rfps.filter((r) => r.genre === active) : rfps;

  return (
    <section id="ideas" className="container-content py-16 sm:py-20 max-w-3xl">
      <div className="divide-y divide-line">
        {visible.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-body">No ideas in this category yet.</p>
          </div>
        ) : (
          visible.map((r) => (
            <Link
              key={r.slug}
              href={`/rfp/${r.slug}`}
              className="group flex items-baseline justify-between gap-8 py-8 hover:bg-surface/20 -mx-4 px-4 sm:-mx-6 sm:px-6 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="eyebrow">
                    {genreLabel(r.genre)}
                  </span>
                  <span className="text-line text-xs" aria-hidden="true">·</span>
                  <span className="font-mono text-[11px] text-muted/60 uppercase tracking-widest">
                    {r.ideaNumber}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium text-white group-hover:text-ember transition-colors leading-snug">
                  {r.title}
                </h2>
                <p className="mt-2 text-sm sm:text-base text-body leading-relaxed line-clamp-2 max-w-xl">
                  {r.pitch}
                </p>
              </div>
              <span
                className="flex-shrink-0 font-mono text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              >
                Read →
              </span>
            </Link>
          ))
        )}
      </div>
      <p className="mt-10 text-center font-mono text-[11px] text-muted/50 uppercase tracking-widest">
        {visible.length} {visible.length === 1 ? "idea" : "ideas"}{active ? ` in ${genreLabel(active as Parameters<typeof genreLabel>[0])}` : " total"}
      </p>
    </section>
  );
}
