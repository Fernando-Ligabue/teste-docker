'use client'

import React, { useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface FeatureCard {
    id: string;
    description: string;
    imageUrl: string;
    link: string;
    size?: string;
}

interface CardsSliderProps {
    cards: FeatureCard[];
}

const CardsSlider: React.FC<CardsSliderProps> = ({ cards }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        if (!containerRef.current) return;
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const onMouseLeave = () => setIsDragging(false);
    const onMouseUp = () => setIsDragging(false);

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !containerRef.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = x - startX;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className="relative w-full">
            <div
                ref={containerRef}
                className={`flex overflow-x-auto gap-4 px-4 hide-scrollbar cursor-grab ${isDragging ? 'cursor-grabbing select-none' : 'select-auto'}`}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                style={{
                    userSelect: isDragging ? 'none' : 'auto',
                    pointerEvents: isDragging ? 'none' : 'auto',
                }}
            >
                <style jsx>{`
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>

                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`flex-shrink-0 relative  
                            ${card.size === 'sm' ? 'w-80 h-[425px]' : card.size === 'lg' ? 'w-80 h-[485px]' : 'w-80 h-[455px]'}
                            ${index % 2 === 0 ? "translate-y-[-20px]" : "translate-y-[20px]"}`
                        }
                    >
                        <Link href={card.link} className="block h-full pointer-events-auto">
                            <Card
                                className={`h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative`}
                                style={{
                                    backgroundImage: `url(${card.imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    color: 'white',
                                }}
                            >
                                <CardContent className="flex flex-col justify-end items-end h-full bg-black bg-opacity-40">
                                    <div>
                                        <p className="text-lg text-white font-medium mb-4">{card.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardsSlider;
