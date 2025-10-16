import React from "react";

type MarqueeProps = {
    lines: [string, string];
    className?: string;
    speed?: number;
};

export function Marquee({
    lines,
    className = "",
    speed = 10,
}: MarqueeProps) {
    const [line1, line2] = lines;

    const styleLeft = {
        animation: `marquee-left ${speed}s linear infinite`,
    };

    const styleRight = {
        animation: `marquee-right ${speed}s linear infinite`,
    };

    return (
        <div className={`overflow-hidden bg-transparent space-y-14 ${className}`}>
            {/* Linha 1 */}
            <div className="overflow-hidden whitespace-nowrap w-full">
                <div className="inline-flex" style={styleLeft}>
                    {Array(4)
                        .fill(null)
                        .map((_, i) => (
                            <span
                                key={`left-${i}`}
                                className="mx-4 text-9xl font-medium text-white"
                            >
                                {line1}
                            </span>
                        ))}
                </div>
            </div>

            {/* Linha 2 */}
            <div className="overflow-hidden whitespace-nowrap w-full">
                <div className="inline-flex" style={styleRight}>
                    {Array(4)
                        .fill(null)
                        .map((_, i) => (
                            <span
                                key={`right-${i}`}
                                className="mx-4 text-9xl font-medium text-white"
                            >
                                {line2}
                            </span>
                        ))}
                </div>
            </div>
        </div>
    );
}
