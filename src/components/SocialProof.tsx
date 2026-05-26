export function SocialProof() {
  const stats = [
    { value: "$10M+", label: "deployed in builder support" },
    { value: "400+", label: "teams backed" },
    { value: "Series A+", label: "fundraising intros available" },
    { value: "Day 1", label: "Starknet network access" },
  ];

  return (
    <div className="border-b border-line bg-inset">
      <div className="container-content">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-line">
          {stats.map((s) => (
            <div key={s.value} className="px-6 py-7 flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                {s.value}
              </span>
              <span className="text-sm text-body leading-snug">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
