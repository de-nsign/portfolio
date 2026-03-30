export default function ProgressiveBlur() {
    const layers = [
        { blur: 0.5, start: 0 },
        { blur: 1, start: 10 },
        { blur: 2, start: 20 },
        { blur: 4, start: 30 },
        { blur: 6, start: 40 },
        { blur: 10, start: 50 },
        { blur: 16, start: 60 },
        { blur: 24, start: 70 },
        { blur: 36, start: 80 },
        { blur: 48, start: 90 },
    ];

    return (
        <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 h-[194px]">
            {layers.map(({ blur, start }, i) => (
                <div
                    key={i}
                    className="absolute inset-0"
                    style={{
                        backdropFilter: `blur(${blur}px)`,
                        WebkitBackdropFilter: `blur(${blur}px)`,
                        maskImage: `linear-gradient(to bottom, transparent ${start}%, black 100%)`,
                        WebkitMaskImage: `linear-gradient(to bottom, transparent ${start}%, black 100%)`,
                    }}
                />
            ))}
        </div>
    );
}
