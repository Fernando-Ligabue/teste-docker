import BlockHeader2 from '@/components/reusable/BlockHeader2'
import { segurosPageContent } from '@/lib/constants';
import React from 'react'
import CardsGridSeguros from './CardsGridSeguros';

const CardsSegurosSociais = () => {
    const segurosData = segurosPageContent[0]?.sectionCPME[0];
    const infoCard = segurosPageContent[0]?.infoCard[0] ?? [];
    const cards = segurosPageContent[0]?.insurances ?? [];
    return (
        <section className='relative overflow-hidden w-full max-w-container py-20'>
            <div className='max-w-screen-xl flex flex-col justify-between items-start mx-auto p-4 space-y-8'>
                <BlockHeader2
                    heading={segurosData.heading}
                    dashColor="bg-black"
                    labelColor="text-default"
                    headingColor="text-default"
                    descriptionText={segurosData.descriptionText}
                    headingSize="text-2xl lg:text-3xl"
                    maxWidthHeading="max-w-full"
                    maxWidthDescription="max-w-full"
                />
            </div>
            <CardsGridSeguros
                cards={cards}
                infoCard={{
                    icon: <img className="w-28 h-28" src={infoCard.icon} alt="CPME" />,
                    title: infoCard.title,
                }}
            />
        </section>

    )
}

export default CardsSegurosSociais