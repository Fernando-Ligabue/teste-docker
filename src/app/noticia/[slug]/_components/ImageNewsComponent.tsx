'use client';

import React, { useCallback, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface ImageNewsComponentProps {
  images: string[];
}

const ImageNewsComponent: React.FC<ImageNewsComponentProps> = ({ images }) => {
  const [api, setApi] = useState<any>();

  const onSelect = useCallback(() => {
    if (!api) return;
  }, [api]);

  const setupApi = useCallback(
    (emblaApi: any) => {
      setApi(emblaApi);
      emblaApi?.on('select', onSelect);
      onSelect();
    },
    [onSelect]
  );

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="w-full max-w-screen-xl flex-center mt-10 px-2 lg:px-0">
        <img
          className="w-full max-w-[450px] h-auto object-cover"
          src={images[0]}
          alt="Imagem da notícia"
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen-xl mt-10 px-2 lg:px-0">
      <Carousel
        setApi={setupApi}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          loop: true,
          align: 'center',
          slidesToScroll: 1,
          containScroll: 'trimSnaps',
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0 flex items-stretch">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="relative pl-0 md:basis-1/3 lg:basis-1/3 select-none cursor-grab"
            >
              <div className="relative p-2 flex flex-col h-full">
                <div className="w-full h-full min-h-80 flex justify-center items-center">
                  <img
                    src={image}
                    alt={`Imagem ${index + 1}`}
                    className="w-full max-h-full object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ImageNewsComponent;
