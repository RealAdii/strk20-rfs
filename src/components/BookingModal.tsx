"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CAL_LINK } from "@/lib/cal";

type Props = {
  isOpen: boolean;
  idea?: string;
  onClose: () => void;
};

export function BookingModal({ isOpen, idea, onClose }: Props) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: {
            "cal-brand": "#E86A2D",
            "cal-bg": "#13102A",
            "cal-bg-emphasis": "#1E1A30",
            "cal-text": "#FFFFFF",
            "cal-text-emphasis": "#FFFFFF",
            "cal-border": "#2A2640",
          },
          light: {
            "cal-brand": "#E86A2D",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  if (!isOpen) return null;
  if (typeof window === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-field/85 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <div
        className="relative my-6 mx-4 sm:my-12 sm:mx-auto w-full max-w-5xl bg-inset border border-line rounded-xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-start justify-between gap-6 px-6 sm:px-8 pt-6 pb-5 border-b border-line">
          <div>
            <p className="eyebrow mb-2">Talk to us</p>
            <h2 id="booking-title" className="text-2xl sm:text-3xl text-white font-medium tracking-tight">
              {idea ? `Building "${idea}"?` : "Building on STRK20?"}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-body max-w-xl">
              Tell us what you&rsquo;re working on. We support builders every step: fundraising intros, $25K packages, and the Starkware network. 400+ teams backed.
              Skip anything you&rsquo;d rather not share. The slot is the only required part.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-muted hover:text-white transition-colors p-2 -m-2"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </header>
        <div className="flex-1 overflow-auto">
          <Cal
            namespace="strk20-rfp"
            calLink={CAL_LINK}
            style={{ width: "100%", height: "100%", minHeight: "560px", overflow: "scroll" }}
            config={{
              theme: "dark",
              ...(idea ? { "metadata[idea]": idea } : {}),
            }}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
