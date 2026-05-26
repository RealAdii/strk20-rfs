import { ImageResponse } from "next/og";
import { readRfp } from "@/lib/rfps";
import { genreLabel } from "@/lib/rfps-types";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const rfp = await readRfp(slug);

  const title = rfp?.title ?? "STRK20 — Request for Startups";
  const label = rfp ? `Idea ${rfp.ideaNumber} · ${genreLabel(rfp.genre)}` : "STRK20";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0C0A18",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "48px" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#E86A2D" }} />
          <span style={{ fontFamily: "monospace", fontSize: 14, color: "#7A7490", letterSpacing: "0.18em" }}>
            STRK20
          </span>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: 15, color: "#7A7490", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 28, fontFamily: "monospace" }}>
            {label}
          </p>
          <h1
            style={{
              fontSize: title.length > 60 ? 52 : 64,
              fontWeight: 500,
              color: "#FFFFFF",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              margin: 0,
              maxWidth: 900,
            }}
          >
            {title}
          </h1>
          {rfp?.pitch && (
            <p style={{ fontSize: 22, color: "#B0ACC0", marginTop: 32, maxWidth: 800, lineHeight: 1.3 }}>
              {rfp.pitch.length > 140 ? rfp.pitch.slice(0, 140) + "…" : rfp.pitch}
            </p>
          )}
        </div>
        <p style={{ fontSize: 16, color: "#7A7490", letterSpacing: "0.08em", fontFamily: "monospace" }}>
          STARKWARE · STRK20.DEV
        </p>
      </div>
    ),
    { ...size }
  );
}
