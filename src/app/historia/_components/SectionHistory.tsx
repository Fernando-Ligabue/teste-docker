import BlockHeader2 from '@/components/reusable/BlockHeader2'
import { historyPageContent } from '@/lib/constants';
import Image from 'next/image';
import React from 'react'

const SectionHistory = () => {
    const cpme = historyPageContent?.[0]?.sectionCPME?.[0];

    return (
        <section className="relative overflow-hidden w-full max-w-container py-20 lg:py-28">
            <div className="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center md:gap-14 mx-auto p-4">
                <div className="w-full lg:w-2/3 space-y-8">
                    <BlockHeader2
                        heading={cpme.heading}
                        dashColor="bg-black"
                        labelColor="text-default"
                        headingColor="text-default"
                        descriptionText={cpme.descriptionText}
                        headingSize="text-2xl lg:text-3xl"
                    />
                </div>
                 <div className='w-full sm:w-1/2 md:p-8'> 
                    <Image
                        width={650}
                        height={650}
                        alt='CPME - Caixa de Previdência do Ministério da Educação'
                        src={cpme.image}
                        className='rounded-sm'
                    />
                </div>
            </div>
        </section>

    )
}

export default SectionHistory