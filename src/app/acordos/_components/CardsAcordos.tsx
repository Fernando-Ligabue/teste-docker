import BlockHeader2 from '@/components/reusable/BlockHeader2'
import { acordosPageContent } from '@/lib/constants';
import React from 'react'
import CardsGridAcordos from './CardsGridAcordos';

const CardsAcordos = () => {
    const acordosData = acordosPageContent[0]?.sectionCPME[0];
    const infoCard = acordosPageContent[0]?.infoCard[0] ?? [];
    const cards = acordosPageContent[0]?.accords ?? [];
    return (
        <section className='relative overflow-hidden w-full max-w-container py-20'>
            <div className='max-w-screen-xl flex flex-col justify-between items-start mx-auto p-4 space-y-8'>
                <BlockHeader2
                    heading={acordosData.heading}
                    dashColor="bg-black"
                    labelColor="text-default"
                    headingColor="text-default"
                    descriptionText={acordosData.descriptionText}
                    headingSize="text-2xl lg:text-3xl"
                    maxWidthHeading="max-w-full"
                    maxWidthDescription="max-w-full"
                />
            </div>
            <CardsGridAcordos
                cards={cards}
                infoCard={{
                    icon: <img className="w-28 h-28" src={infoCard.icon} alt="CPME" />,
                    title: infoCard.title,
                }}
            />
        </section>

    )
}

export default CardsAcordos