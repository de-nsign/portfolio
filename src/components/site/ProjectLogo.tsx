import Image from "next/image";

export default function ProjectLogo({
  logo,
  logoBg,
  logoText,
  logoColor,
  title,
  size = 36,
  radius = 8,
}: {
  logo?: string;
  logoBg?: string;
  logoText?: string;
  logoColor?: string;
  title: string;
  size?: number;
  radius?: number;
}) {
  if (logo) {
    return (
      <Image
        src={logo}
        alt={title}
        width={size}
        height={size}
        className="object-cover"
        style={{ width: size, height: size, borderRadius: radius }}
      />
    );
  }
  return (
    <div
      className="grid place-items-center font-semibold"
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: logoBg ?? "#111",
        color: logoColor ?? "#fff",
        fontSize: size * (logoText && logoText.length > 2 ? 0.28 : 0.42),
      }}
    >
      {logoText ?? title.slice(0, 1)}
    </div>
  );
}
