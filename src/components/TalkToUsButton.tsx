"use client";

import clsx from "clsx";
import { useBooking } from "./BookingContext";

type Props = {
  idea?: string;
  variant?: "primary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
};

export function TalkToUsButton({
  idea,
  variant = "primary",
  size = "md",
  className,
  children,
}: Props) {
  const { open } = useBooking();

  const base =
    "inline-flex items-center gap-2 font-medium transition-colors duration-150 disabled:opacity-50 cursor-pointer";
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-5 text-[15px]",
    lg: "h-13 px-7 text-base",
  };
  const variants = {
    primary: "bg-ember text-field hover:bg-ember-deep",
    ghost: "border border-line text-white hover:border-muted",
    link: "px-0 text-ember hover:text-white",
  };

  return (
    <button
      type="button"
      onClick={() => open(idea)}
      className={clsx(base, sizes[size], variants[variant], className)}
    >
      {children ?? "Talk to us"}
      <span aria-hidden="true">→</span>
    </button>
  );
}
