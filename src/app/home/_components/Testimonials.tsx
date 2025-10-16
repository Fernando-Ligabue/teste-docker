'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { homePageContent } from '@/lib/constants'
import Autoplay from 'embla-carousel-autoplay'
import { X } from 'lucide-react'
import { useCallback, useState } from 'react'
import { FaPlay } from 'react-icons/fa'

const Testimonials = () => {
    const [api, setApi] = useState<any>()
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonialsData = homePageContent?.testimonialsSection?.[0]?.testimonialsData || []

    const totalSlides = testimonialsData.length

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

    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const handlePlayClick = (videoUrl: string) => {
        setActiveVideo(videoUrl);
    };

    const handleCloseModal = () => {
        setActiveVideo(null);
    };


    return (
        <section className="w-full flex flex-col justify-center items-center py-8 relative">
            <div className="w-full max-w-screen-xl mt-10 px-2 lg:px-0">
                <Carousel
                    setApi={setupApi}
                    plugins={[Autoplay({
                        delay: 4000,
                        stopOnInteraction: false,
                    })]}
                    opts={{
                        loop: true,
                        align: "center",
                        slidesToScroll: 1,
                        containScroll: "trimSnaps"
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-0 flex items-stretch">
                        {testimonialsData.map((testimonial, index) => (
                            <CarouselItem
                                key={index}
                                className="relative pl-0 md:basis-1/3 lg:basis-1/3 select-none cursor-grab"
                            >
                                <div className='relative p-2 flex flex-col h-full'>
                                    <div className='w-full h-full min-h-80 flex flex-col justify-between items-start gap-8 p-8 border border-primary rounded-sm'>
                                        <img className="w-36 h-36 rounded-full object-cover mx-auto" src={testimonial.imageUrl} alt={testimonial.author} />
                                        <h3 className="text-lg font-semibold text-default mt-4">
                                            {testimonial.testimonial}
                                        </h3>
                                        <div className="w-full flex justify-between items-center">
                                            <span className='text-default text-lg wrap-break-word'>{testimonial.author}</span>
                                            <button
                                                onClick={() => handlePlayClick(testimonial.videoUrl)}
                                                className="rounded-full border-2 border-primary w-14 h-14 flex justify-center items-center pl-1 cursor-pointer animate-pulse"
                                            >
                                                <FaPlay size={24} className="text-primary" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                {activeVideo && (
                    <div className="fixed top-0 left-0 w-full h-full bg-zinc-900 bg-opacity-90 flex justify-center items-center z-50">
                        <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-4 right-4 text-white bg-black rounded-full p-0.5 text-3xl z-10"
                            >
                                <X className="cursor-pointer" />
                            </button>
                            <video
                                src={activeVideo}
                                controls
                                autoPlay
                                className="w-full h-auto max-h-[80vh] object-contain p-4"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Barra de progresso */}
            {totalSlides !== 3 && (
                <div className="absolute -bottom-4 w-full flex justify-center">
                    <div className="w-[200px] h-[2px] bg-primary/30 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-300 ease-in-out"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                </div>
            )}
        </section>
    )
}

export default Testimonials
