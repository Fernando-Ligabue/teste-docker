'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { homePageContent } from '@/lib/constants'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useState } from 'react'

const SlideCardsHome = () => {
    const cardsSafeHome = homePageContent?.cardsSafeHome;

    const [api, setApi] = useState<any>()
    const [currentIndex, setCurrentIndex] = useState(0)
    const totalSlides = cardsSafeHome.length

    const onSelect = useCallback(() => {
        if (!api) return
        setCurrentIndex(api.selectedScrollSnap())
    }, [api])

    const setupApi = useCallback((emblaApi: any) => {
        setApi(emblaApi)
        emblaApi?.on('select', onSelect)
        onSelect()
    }, [onSelect])

    const progressPercent = ((currentIndex + 1) / totalSlides) * 100

    return (
        <section className="w-full flex flex-col justify-center items-center py-20 relative">
            <div className="w-full max-w-screen-xl mt-10 px-2 lg:px-0">
                <Carousel
                    setApi={setupApi}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                            stopOnInteraction: false,
                        })
                    ]}
                    opts={{
                        loop: true,
                        align: "center",
                        slidesToScroll: 1,
                        containScroll: "trimSnaps"
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-0">
                        {cardsSafeHome.map((card, index) => (
                            <CarouselItem
                                key={index}
                                className="relative pl-0 md:basis-1/2 lg:basis-1/3"
                            >
                                <Link href={card.url}>
                                    <div className='relative p-2'>
                                        <img
                                            src={card.image}
                                            alt={`${card.segment} ${card.type}`}
                                            className="w-full h-full object-cover rounded-md"
                                        />
                                        <div className='absolute w-max bottom-10 left-4 p-4 '>
                                            <div>
                                                <h3 className="text-lg font-semibold text-white mt-4">
                                                    {card.segment}
                                                </h3>
                                                <span className='text-white text-lg wrap-break-word'>{card.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
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
    )
}

export default SlideCardsHome