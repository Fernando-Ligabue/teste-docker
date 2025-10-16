'use client'

import { useEffect, useState } from 'react'
import { homePageContent } from '@/lib/constants'
import BlockHeader1 from '@/components/reusable/BlockHeader1';

const ROTATION_INTERVAL = 4000;

const HeroHome = () => {
    const heroContent = homePageContent?.heroContent?.[0];
    const bannersHome = heroContent?.background || [];

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = bannersHome.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, ROTATION_INTERVAL);

        return () => clearInterval(interval);
    }, [totalSlides]);

    const currentBanner = bannersHome[currentIndex];
    const progressPercent = ((currentIndex + 1) / totalSlides) * 100;

    return (
        <section className="min-h-dvh w-full flex flex-col justify-end sm:justify-center items-center relative">

            <div className="absolute top-0 left-0 w-full h-full z-0">
                <img
                    src={currentBanner}
                    alt="Banner"
                    className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                    loading="lazy"
                    style={{
                        objectPosition: '80% center',
                    }}
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-10"></div>

            <div className="w-full max-w-container relative bottom-24 sm:bottom-0">
                <BlockHeader1
                    label={heroContent?.label || ""}
                    heading={heroContent?.heading}
                    highlightText={heroContent?.descriptionText}
                />
            </div>

            <div className="absolute bottom-8 w-full flex justify-center">
                <div className="w-[200px] h-[2px] bg-white/30 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-white transition-all duration-300 ease-in-out"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>
        </section>
    );
}

export default HeroHome;
