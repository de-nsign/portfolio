import { footerColumns } from "@/lib/site-data";

export default function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1056px] px-6 pb-20 pt-24">
      <div className="chrome-text select-none text-center leading-none">
        Let&apos;s Connect
      </div>

      <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
        {footerColumns.map((col) => (
          <div key={col.heading}>
            <p className="mb-4 text-[16px] text-neutral-400">{col.heading}</p>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[16px] text-ink transition-opacity hover:opacity-60"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
