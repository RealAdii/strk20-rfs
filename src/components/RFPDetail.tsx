import Link from "next/link";
import { TalkToUsButton } from "./TalkToUsButton";
import { RFPBody } from "./RFPBody";
import { genreLabel, type RFP } from "@/lib/rfps-types";

export function RFPDetail({ rfp, related }: { rfp: RFP; related: RFP[] }) {
  return (
    <article>
      <div className="container-content pt-14 sm:pt-20 pb-24">

        {/* Back */}
        <Link
          href="/"
          className="eyebrow inline-flex items-center gap-2 hover:text-white transition-colors"
        >
          <span aria-hidden="true">←</span> All ideas
        </Link>

        {/* Main 2-col grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-14">

          {/* ── LEFT: content ── */}
          <div className="lg:col-span-8">
            <p className="eyebrow mb-5">
              Idea {rfp.ideaNumber} · {genreLabel(rfp.genre)}
            </p>

            <h1 className="text-[36px] sm:text-[52px] lg:text-[60px] leading-[1] tracking-[-0.025em] font-medium text-white">
              {rfp.title}
            </h1>

            <p className="mt-8 text-xl sm:text-2xl leading-[1.3] text-white/70 max-w-2xl tracking-tight font-normal">
              {rfp.pitch}
            </p>

            <div className="mt-16 border-t border-line">
              <RFPBody source={rfp.content} />
            </div>
          </div>

          {/* ── RIGHT: sticky sidebar ── */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 flex flex-col gap-5">

              {/* CTA */}
              <div className="border border-line bg-panel px-5 py-6">
                <p className="eyebrow mb-4">Building this?</p>
                <p className="text-white text-[17px] font-medium leading-snug mb-2">
                  Show us what you&rsquo;re working on. We&rsquo;ll support you every step of the way.
                </p>
                <p className="text-sm text-body mb-5 leading-relaxed">
                  Fundraising intros, $25K support packages, and the full Starkware network behind you.
                  We&rsquo;ve backed 400+ teams this way.
                </p>
                <TalkToUsButton idea={rfp.title} size="md" variant="primary" className="w-full justify-center">
                  Book a chat
                </TalkToUsButton>
              </div>

              {/* Idea meta */}
              <div className="border border-line px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="eyebrow mb-0.5">{genreLabel(rfp.genre)}</p>
                  <p className="font-mono text-[11px] text-muted">
                    Published {new Date(rfp.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </p>
                </div>
                <span className="font-mono text-4xl font-bold text-white/[0.06] select-none leading-none">
                  {rfp.ideaNumber}
                </span>
              </div>

            </div>
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-24 pt-14 border-t border-line">
            <p className="eyebrow mb-8">More in {genreLabel(rfp.genre)}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/rfp/${r.slug}`}
                  className="group block p-8 bg-field hover:bg-surface transition-colors"
                >
                  <p className="eyebrow mb-4">Idea {r.ideaNumber}</p>
                  <h3 className="text-xl text-white font-medium leading-snug mb-3 group-hover:text-ember transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed line-clamp-2">{r.pitch}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </article>
  );
}
