"use client";

type Props = {
  desktop: string;
  mobile: string;
  alt: string;
};

export default function CaseDeviceMockup({ desktop, mobile, alt }: Props) {
  return (
    <div className="case-section px-6 py-16 md:py-24 bg-neutral-100">
      <div className="max-w-6xl mx-auto">
        <span className="text-label uppercase text-accent-orange tracking-widest block mb-8 text-black">
          Responsive Design
        </span>
        <div className="relative flex items-end justify-center gap-6">
          {/* Desktop mockup */}
          <div className="w-full max-w-4xl">
            <div className="rounded-t-lg border-2 border-b-0 border-black/10 bg-white overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-2 bg-neutral-200/60 border-b border-black/5">
                <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
              </div>
              <div className="relative aspect-[16/10] bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-label uppercase tracking-widest">
                    {alt} — Desktop
                  </span>
                </div>
              </div>
            </div>
            <div className="h-3 bg-black/10 rounded-b-lg" />
          </div>

          {/* Mobile mockup */}
          <div className="absolute right-6 md:right-12 bottom-0 w-24 md:w-36">
            <div className="rounded-2xl border-2 border-black/10 bg-white overflow-hidden shadow-2xl">
              <div className="flex justify-center py-1">
                <span className="w-10 h-1 rounded-full bg-black/10" />
              </div>
              <div className="relative aspect-[9/16] bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-[8px] uppercase tracking-widest text-center px-1">
                    Mobile
                  </span>
                </div>
              </div>
              <div className="flex justify-center py-1.5">
                <span className="w-8 h-0.5 rounded-full bg-black/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
