"use client";

export default function ColumnGrid() {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none grid grid-cols-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={i < 4 ? "border-r border-divider-dark" : ""}
        />
      ))}
    </div>
  );
}
