import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FilterChips } from "@/components/FilterChips";
import { RFPList } from "@/components/RFPList";
import { readAllRfps, GENRES, type Genre } from "@/lib/rfps";

export default async function HomePage() {
  const rfps = await readAllRfps();
  const counts: Record<Genre | "all", number> = {
    all: rfps.length,
    "markets-trading": 0,
    "payments-money": 0,
    infrastructure: 0,
    "social-communications": 0,
    gaming: 0,
  };
  for (const r of rfps) counts[r.genre]++;
  void GENRES;

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero rfpCount={rfps.length} />
        <Suspense fallback={null}>
          <FilterChips counts={counts} />
        </Suspense>
        <Suspense fallback={null}>
          <RFPList rfps={rfps} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
