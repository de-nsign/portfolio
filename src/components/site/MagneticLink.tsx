"use client";

import { useState } from "react";

export default function MagneticLink({
  href,
  target,
  rel,
  className = "",
  strength = 0.35,
  children,
}: {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  strength?: number;
  children: React.ReactNode;
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [pressed, setPressed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setOffset({ x, y });
  };

  const reset = () => {
    setOffset({ x: 0, y: 0 });
    setPressed(false);
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px) scale(${
          pressed ? 0.96 : 1
        })`,
      }}
      className={`will-change-transform transition-[transform,background-color] duration-300 ease-out ${className}`}
    >
      {children}
    </a>
  );
}
