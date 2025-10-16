import BlockHeader2 from '@/components/reusable/BlockHeader2'
import { cPublicaPageContent } from '@/lib/constants';
import Image from 'next/image';
import React from 'react'

const SectionHistory = () => {
    const cpme = cPublicaPageContent?.[0]?.sectionCPME?.[0];

    return (
        <section className="relative overflow-hidden w-full max-w-container py-20 lg:py-28">
            <div className="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center md:gap-14 mx-auto p-4">
                <div className="w-full lg:w-2/3 space-y-8">
                    <div className='p-4'>
                        <h2 className={`text-2xl lg:text-3xl font-semibold leading-tight max-w-screen-sm text-default`}>
                            {cpme.heading}
                        </h2>
                        <p className={`w-full max-w-screen-sm text-default text-sm font-normal pt-4`}>
                            {cpme.descriptionText}
                        </p>
                    </div>

                    <div className='p-4'>
                        <h3 className={`text-2xl lg:text-3xl font-semibold leading-tight max-w-screen-sm text-default`}>
                            {cpme.heading}
                        </h3>
                        {cpme.descriptionText2.map((item, index) => (
                            <p key={index} className={`w-full max-w-screen-sm text-default text-sm font-normal pt-4`}>
                                {item}
                            </p>
                        ))}

                    </div>
                </div>
                 <div className='w-full sm:w-1/2 md:p-8'> 
                    <Image
                        width={650}
                        height={650}
                        alt='CPME - Caixa de Previdência do Ministério da Educação'
                        src={cpme.image}
                    />
                </div>
            </div>
        </section>

    )
}

export default SectionHistory