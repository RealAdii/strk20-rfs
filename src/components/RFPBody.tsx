import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h2: ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="rfp-h2 mt-14 pt-10 border-t border-line font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted mb-5">
      {children}
    </h2>
  ),

  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-[17px] text-body leading-relaxed max-w-prose mt-4" {...props} />
  ),

  ul: ({ children }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-1 divide-y divide-line/60">{children}</ul>
  ),

  li: ({ children }: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="flex gap-5 py-4">
      <span className="mt-[4px] flex-shrink-0 text-ember font-mono text-[11px] leading-none">→</span>
      <span className="text-[16px] sm:text-[17px] text-body leading-relaxed flex-1 [&_strong]:text-white [&_strong]:font-medium">
        {children}
      </span>
    </li>
  ),

  ol: ({ children }: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="mt-5 space-y-3 max-w-prose">{children}</ol>
  ),

  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-white font-medium" {...props} />
  ),

  code: ({ children, className }: React.HTMLAttributes<HTMLElement>) => {
    if (className) return <code className={className}>{children}</code>;
    return (
      <code className="font-mono text-[0.85em] text-ember bg-ember/10 px-1.5 py-0.5 rounded-sm">
        {children}
      </code>
    );
  },

  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-ember underline-offset-4 hover:underline" {...props} />
  ),

  table: ({ children }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="mt-8 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
      <table className="w-full text-sm border-collapse border border-line">{children}</table>
    </div>
  ),

  thead: ({ children }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-panel">{children}</thead>
  ),

  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-line" {...props} />
  ),

  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="even:bg-surface/40" {...props} />
  ),

  th: ({ children }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-[0.14em] text-muted font-medium border-b border-line">
      {children}
    </th>
  ),

  td: ({ children }: React.TdHTMLAttributes<HTMLTableCellElement>) => {
    const text = typeof children === "string" ? children : "";
    const isEmpty = text.trim() === "";
    const isYes = text.toLowerCase().startsWith("yes");
    const isPartial = text.toLowerCase().startsWith("partial");

    return (
      <td className="px-4 py-3.5 align-top leading-snug border-r border-line/40 last:border-r-0 [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-ember [&_code]:bg-ember/10 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded-sm">
        {isEmpty ? (
          <span className="text-muted/30" aria-hidden="true">-</span>
        ) : isYes ? (
          <span className="flex items-start gap-2 text-white">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ember flex-shrink-0" aria-hidden="true" />
            <span>{children}</span>
          </span>
        ) : isPartial ? (
          <span className="text-muted">{children}</span>
        ) : (
          <span className="text-body">{children}</span>
        )}
      </td>
    );
  },

  hr: () => <hr className="my-16 border-none h-px bg-line" />,

  blockquote: ({ children }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="my-8 pl-5 border-l-2 border-ember text-body italic text-lg leading-relaxed max-w-prose">
      {children}
    </blockquote>
  ),
};

export function RFPBody({ source }: { source: string }) {
  return (
    <div className="rfp-body mt-14">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
