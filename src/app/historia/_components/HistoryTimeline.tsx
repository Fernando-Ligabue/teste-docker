"use client"

import { useState, useEffect, useRef } from 'react';
import { historyPageContent } from '@/lib/constants';

const VerticalTimeline = () => {
    const timelineData = historyPageContent?.[0]?.timeline ?? [];

    const [scrollProgress, setScrollProgress] = useState(0);
    const timelineRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;

            const timelineElement = timelineRef.current;
            const timelineRect = timelineElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const timelineTop = timelineRect.top;
            const timelineHeight = timelineRect.height;

            const startProgress = windowHeight - timelineTop;
            const maxProgress = timelineHeight + windowHeight;

            let progress = Math.max(0, Math.min(1, startProgress / maxProgress));

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="bg-gradient-to-b from-primary/70 to-primary py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-xl font-bold text-white mb-4">Timeline CPME</h1>
                    <p className="text-white text-4xl">A nossa história</p>
                </div>

                <div ref={timelineRef} className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/20 rounded-full"></div>

                    <div
                        className="absolute left-8 top-0 w-1 bg-white rounded-full transition-all duration-300 ease-out"
                        style={{ height: `${scrollProgress * 100}%` }}
                    ></div>

                    <div className="space-y-16 mb-44">
                        {timelineData.map((item) => (
                            <div
                                key={item.id}
                                ref={(el) => { itemRefs.current[item.id] = el; }}
                                className="relative flex items-start group min-h-80"
                            >
                                {/* Year Circle */}
                                <div className="flex-shrink-0 relative">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary font-bold text-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                                        {item.year}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="ml-8 flex-1">
                                    <div className="p-4 flex flex-col md:flex-row justify-between items-start gap-14">
                                        <div className='w-full'>
                                            {item.date && (
                                                <span className="text-xs text-white font-medium">
                                                    {item.date}
                                                </span>
                                            )}
                                            <h3 className={`max-w-80 text-2xl font-medium text-white mb-4 ${item.date ? "pt-4" : "" }`}>
                                                {item.intro}
                                            </h3>
                                        </div>

                                        <div className='w-full'>
                                            <div className="text-white leading-relaxed space-y-4 w-full mb-4">
                                                {item.description.map((paragraph, pIndex) => (
                                                    <p key={pIndex}
                                                        className="text-white text-sm list-disc space-y-2"
                                                    >{paragraph}
                                                    </p>
                                                ))}
                                            </div>
                                            <div className="text-gray-600 leading-relaxed space-y-4">
                                                {item.list && item.list.length > 0 && (
                                                    <ul className="text-white text-sm list-disc space-y-2">
                                                        {item.list.map((listItem, index) => (
                                                            <li key={index} className='ml-6'>{listItem}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerticalTimeline;