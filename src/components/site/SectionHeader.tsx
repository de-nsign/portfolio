export default function SectionHeader({
  title,
  count,
}: {
  title: string;
  count?: number | string;
}) {
  return (
    <div className="flex items-baseline justify-between border-b border-neutral-100 pb-4">
      <h2 className="text-[22px] font-medium text-ink">{title}</h2>
      {count !== undefined && (
        <span className="text-[18px] text-neutral-300">{count}</span>
      )}
    </div>
  );
}
