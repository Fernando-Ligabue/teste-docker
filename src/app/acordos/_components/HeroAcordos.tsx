import BlockHeader1 from '@/components/reusable/BlockHeader1';
import { acordosPageContent } from '@/lib/constants';
import Image from 'next/image';
import React from 'react'

const HeroAcordos = () => {
    const acordosData = acordosPageContent[0]?.content[0]?.heroContent[0];

    return (
        <section className="min-h-dvh w-full flex flex-col justify-end lg:justify-center items-center relative">

            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image
                    src={acordosData.background}
                    alt="Banner"
                    fill
                    style={{ objectFit: 'cover', objectPosition: '80% center' }}
                    loading="lazy"
                    className='w-auto h-full'
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-15"></div>

            <div className="w-full lg:w-2/3 max-w-container flex justify-between items-center mt-24 pb-8 relative">
                <div className="relative w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-end sm:items-center gap-8 p-4">
                    <div className="w-full lg:w-1/2">
                        <BlockHeader1
                            label={acordosData.label}
                            heading={acordosData.heading}
                            complementText={acordosData.descriptionText}
                            headingSize="text-2xl sm:text-4xl"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-end lg:absolute bottom-28 lg:-bottom-44 right-4">
                        <img
                            width={400}
                            height={400}
                            alt="CPME - Caixa de Previdência do Ministério da Educação"
                            src={acordosData.logo}
                            className="w-24 lg:w-72 h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroAcordos