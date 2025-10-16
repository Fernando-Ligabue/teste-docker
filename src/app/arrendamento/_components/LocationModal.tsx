import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PropertyArrendamento } from '@/lib/types';
import { Bed, RulerDimensionLine, Toilet, X } from 'lucide-react';
import React from 'react';
import { house } from '@/lib/constants';
import { FaStairs } from 'react-icons/fa6';

interface LocationModalProps {
    locations: PropertyArrendamento[];
    onClose: () => void;
}

export default function LocationModal({ locations, onClose }: LocationModalProps) {
    return (
        <div className="fixed inset-0 z-100 bg-hover-blue bg-opacity-70 flex items-center justify-center px-4" onClick={onClose}>
            <div className="bg-white/90 w-full max-w-[600px] max-h-[80vh] overflow-y-auto rounded-lg shadow-lg p-6 relative  scrollbar-primary"
            onClick={(e) => e.stopPropagation()}
            >
                <X
                    size={20}
                    className='absolute top-3 right-3 text-white bg-primary rounded-full p-0.5 cursor-pointer z-10'
                    onClick={onClose}
                />

                {/* Lista de imóveis */}
                {locations.map((location) => (
                    <div key={location.id} className="border-b pb-6 mb-6 last:border-b-0 last:mb-0 last:pb-0">
                        <div>
                            <h2 className='text-lg text-primary font-medium'>
                                {location.segment === "Habitacional" ? "Arrendamento Habitacional" : "Arrendamento Comercial"}
                            </h2>
                            <p className='text-base text-default'>{location.address}</p>
                        </div>

                        {/* Carousel */}
                        <div className='w-full flex-center mt-2'>
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {location.images.map((item, index) => (
                                        <CarouselItem key={index} className='select-none p-0'>
                                            <img className='w-full h-[385px] object-cover rounded-md' src={item} alt={`image-${index}`} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className='left-2 text-white hover:text-primary cursor-pointer' />
                                <CarouselNext className='right-2 text-white hover:text-primary cursor-pointer' />
                            </Carousel>
                        </div>

                        {/* Info */}
                        <div className='flex justify-between items-center mt-2'>
                            <span className='text-primary font-medium'>{location.floor} | Publicado a {location.publish}</span>
                            <div className='relative'>
                                <img className='w-8 h-8' src={house} alt="CPME - Arrendamentos" />
                                <span className='text-base text-primary font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-0.5'>
                                    {location.ernergetic}
                                </span>
                            </div>
                        </div>

                        {/* Icons */}
                        <div className='flex justify-around items-center gap-4 mt-4'>
                            <div className='flex-center flex-col gap-1'>
                                <Bed size={24} className='text-default' />
                                <span className='text-default text-lg font-semibold'>{location.tipology}</span>
                            </div>
                            <div className='flex-center flex-col gap-1'>
                                <RulerDimensionLine size={24} className='text-default' />
                                <span className='text-default text-lg font-semibold'>{location.squareMeters}m²</span>
                            </div>
                            <div className='flex-center flex-col gap-1'>
                                <FaStairs size={24} className='text-default' />
                                <span className='text-default text-lg font-semibold'>{location.floor}</span>
                            </div>
                            {location.bathrooms > 0 && (
                                <div className='flex-center flex-col gap-1'>
                                    <Toilet size={24} className='text-default' />
                                    <span className='text-default text-lg font-semibold'>{location.bathrooms}</span>
                                </div>
                            )}
                        </div>

                        <div className='w-full flex-center mt-4'>
                            <p className='text-md text-default font-semibold py-2.5 px-10 bg-zinc-300 border-1 border-zinc-300 rounded-sm'>
                                {location.monthlyRent}€
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
