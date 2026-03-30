"use client";

import clsx from "clsx";

type MarqueeStripProps = {
  items: React.ReactNode[];
  speed?: number;
  direction?: "left" | "right";
  className?: string;
};

export default function MarqueeStrip({
  items,
  speed = 30,
  direction = "left",
  className,
}: MarqueeStripProps) {
  const animationStyle = {
    animationDuration: `${speed}s`,
  };

  return (
    <div className={clsx("overflow-hidden whitespace-nowrap", className)}>
      <div
        className={clsx(
          "inline-flex",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        )}
        style={animationStyle}
      >
        {/* Original set */}
        {items.map((item, i) => (
          <div
            key={`a-${i}`}
            className="flex items-center justify-center px-8 md:px-12 shrink-0"
          >
            {item}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((item, i) => (
          <div
            key={`b-${i}`}
            className="flex items-center justify-center px-8 md:px-12 shrink-0"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
