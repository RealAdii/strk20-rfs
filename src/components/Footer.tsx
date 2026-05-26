export function Footer() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="container-content py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-ember rounded-full" aria-hidden="true" />
          <span className="font-mono text-xs text-muted tracking-[0.18em]">
            STRK20 · POWERED BY STARKWARE
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted">
          <a
            href="https://starkware.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            starkware.co
          </a>
          <a
            href="mailto:adithya@starkware.co"
            className="hover:text-white transition-colors"
          >
            adithya@starkware.co
          </a>
        </div>
      </div>
    </footer>
  );
}
