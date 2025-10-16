'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useState } from 'react'
import { MapPin } from 'lucide-react'
import { patrimonioPageContent } from '@/lib/constants'
import MapPatrimonio from './MapPatrimonio'

const SlideProperties = () => {
    const propertiesList = patrimonioPageContent?.[0]?.propertiesPatrimonio || []

    const validatedProperties = propertiesList.map(property => ({
        ...property,
        coordinates: [property.lat, property.lng] as [number, number],
    }))

    const [api, setApi] = useState<any>()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedProperty, setSelectedProperty] = useState(null)
    const totalSlides = validatedProperties.length

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

    const handlePropertyClick = (property: any) => {
        setSelectedProperty(property)
    }

    return (
        <section className="w-full flex flex-col justify-center items-center lg:-mt-80 pt-14 lg:pt-20 relative">
            <div className='relative w-full max-w-5xl mt-10 px-2 lg:px-0'>
                <div className="w-full max-w-5xl mt-10 px-2 lg:px-0 pb-28">
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
                        <CarouselContent className="flex items-stretch -ml-0">
                            {validatedProperties.map((card, index) => (
                                <CarouselItem
                                    key={index}
                                    className="relative pl-0 md:basis-1/2 lg:basis-1/3 cursor-pointer"
                                    onClick={() => handlePropertyClick(card)}
                                >
                                    <div className="p-2">
                                        <img
                                            src={card.imageUrl}
                                            alt={`${card.title} - ${card.address}`}
                                            className="w-full h-full object-cover rounded-t-md"
                                        />
                                        <div className={`w-full min-h-52 bg-white ${card.segment === "Habitacional" ? "hover:bg-primary" : "hover:bg-primary-active"} shadow-sm p-8 space-y-6 flex flex-col justify-between items-start group transition-colors duration-200 ease-in`}>
                                            <div>
                                                <h3 className="text-xl font-medium text-primary mt-4 group-hover:text-white  select-none">
                                                    Património
                                                </h3>
                                                <p className="text-xl font-bold text-primary group-hover:text-white select-none">
                                                    {card.segment}
                                                </p>
                                            </div>
                                            <div className="flex justify-start items-start gap-2 select-none">
                                                <MapPin size={22} className="text-primary group-hover:text-white" />
                                                <p className="w-full text-default group-hover:text-white text-sm wrap-break-word flex items-center gap-4">
                                                    {card.address}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='text-white hover:text-white cursor-pointer' />
                        <CarouselNext className='text-white hover:text-white cursor-pointer' />

                    </Carousel>
                </div>

                {/* Barra de progresso */}
                <div className="absolute bottom-8 w-full flex justify-center">
                    <div className="w-[200px] h-[2px] bg-white/30 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white transition-all duration-300 ease-in-out"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                </div>
            </div>

            {selectedProperty && (
                <MapPatrimonio locations={[selectedProperty]} />
            )}
        </section>
    )
}

export default SlideProperties
