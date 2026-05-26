import Link from "next/link";
import { TalkToUsButton } from "./TalkToUsButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-field/85 backdrop-blur-md border-b border-line">
      <div className="container-content flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="inline-block w-2 h-2 bg-ember rounded-full" aria-hidden="true" />
          <span className="font-mono text-sm text-white tracking-[0.18em]">STRK20</span>
          <span className="hidden sm:inline text-muted text-sm">/ Request for Startups</span>
        </Link>
        <TalkToUsButton size="sm">Talk to us</TalkToUsButton>
      </div>
    </header>
  );
}
