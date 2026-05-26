import Link from "next/link";
import { TalkToUsButton } from "./TalkToUsButton";

export function Hero({ rfpCount: _ }: { rfpCount: number }) {
  return (
    <section className="pt-12 sm:pt-16 pb-10 sm:pb-14 border-b border-line text-center">
      <div className="container-content max-w-3xl">
        <p className="eyebrow mb-5">STRK20 · 2026</p>
        <h1 className="text-[52px] sm:text-[72px] lg:text-[88px] italic font-medium leading-[0.92] tracking-[-0.03em] text-white">
          Request for Startups
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-body max-w-xl mx-auto leading-relaxed">
          These are problems we&rsquo;d love to see startups tackle on STRK20,
          our standard for compliant, programmable privacy. If one excites you,
          treat it as validation to dive in.
        </p>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
          <TalkToUsButton size="lg" variant="primary">
            Talk to us
          </TalkToUsButton>
          <Link
            href="#ideas"
            className="inline-flex items-center gap-2 h-13 px-6 text-base text-white border border-line hover:border-muted transition-colors rounded-full"
          >
            Browse ideas
            <span aria-hidden="true">↓</span>
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          {[
            "$10M+ deployed",
            "400+ teams backed",
            "Fundraising intros",
            "Starknet network access",
          ].map((stat) => (
            <span key={stat} className="flex items-center gap-2 font-mono text-[11px] text-muted uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-ember flex-shrink-0" aria-hidden="true" />
              {stat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
