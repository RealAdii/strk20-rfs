import Link from "next/link";
import { TalkToUsButton } from "./TalkToUsButton";

export function Hero({ rfpCount }: { rfpCount: number }) {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 border-b border-line text-center">
      <div className="container-content max-w-3xl">
        <p className="eyebrow mb-8">STRK20 · Request for Startups · 2026</p>
        <h1 className="text-[52px] sm:text-[72px] lg:text-[88px] italic font-medium leading-[0.92] tracking-[-0.03em] text-white">
          Request for Startups
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-body max-w-xl mx-auto leading-relaxed">
          {rfpCount} open problems Starkware wants solved on STRK20 — the
          standard for compliant, programmable privacy. Find one that fits,
          show us what you&rsquo;re working on.
        </p>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-3">
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
      </div>
    </section>
  );
}
