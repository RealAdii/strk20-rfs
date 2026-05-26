import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RFPDetail } from "@/components/RFPDetail";
import { readAllRfps, readRfp } from "@/lib/rfps";

export async function generateStaticParams() {
  const rfps = await readAllRfps();
  return rfps.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const rfp = await readRfp(slug);
  if (!rfp) return { title: "Not found" };
  return {
    title: `${rfp.title} — STRK20`,
    description: rfp.pitch,
    openGraph: {
      title: `${rfp.title} — STRK20`,
      description: rfp.pitch,
      type: "article",
    },
  };
}

export default async function RFPPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const rfp = await readRfp(slug);
  if (!rfp) notFound();

  const all = await readAllRfps();
  const related = all
    .filter((r) => r.genre === rfp.genre && r.slug !== rfp.slug)
    .slice(0, 2);

  return (
    <>
      <Header />
      <main className="flex-1">
        <RFPDetail rfp={rfp} related={related} />
      </main>
      <Footer />
    </>
  );
}
