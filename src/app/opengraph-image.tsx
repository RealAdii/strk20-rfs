import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "STRK20 - Build the privacy layer for on-chain finance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          <p style={{ fontSize: 16, color: "#7A7490", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24, fontFamily: "monospace" }}>
            Request for Startups · 2026
          </p>
          <h1 style={{ fontSize: 72, fontWeight: 500, color: "#FFFFFF", lineHeight: 0.95, letterSpacing: "-0.03em", margin: 0 }}>
            Build the privacy layer
            <br />
            <span style={{ color: "#7A7490" }}>for on-chain finance.</span>
          </h1>
        </div>
        <p style={{ fontSize: 20, color: "#B0ACC0", marginTop: 48 }}>
          starkware.co
        </p>
      </div>
    ),
    { ...size }
  );
}
