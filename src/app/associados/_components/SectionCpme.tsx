import BlockHeader2 from '@/components/reusable/BlockHeader2'
import { asscociatePageContent } from '@/lib/constants';
import Image from 'next/image'
import React from 'react'

const SectionCpme = () => {
    const cpme = asscociatePageContent?.[0]?.sectionCPME?.[0];
    const stepsData = asscociatePageContent?.[0]?.stepsSubscribe;
    const warn = asscociatePageContent?.[0]?.sectionWarn?.[0];

    return (
        <section className="relative overflow-hidden w-full max-w-container bg-bg-section py-20 lg:py-28">
            <div className="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center mx-auto p-4">
                <div className="w-full space-y-8">
                    <BlockHeader2
                        label={cpme.label}
                        heading={cpme.heading}
                        dashColor="bg-black"
                        labelColor="text-default"
                        headingColor="text-default"
                        descriptionText={cpme.descriptionText}
                        headingSize="text-2xl lg:text-4xl"
                    />
                </div>
            </div>

            <div className="max-w-screen-xl flex flex-col justify-between items-start mx-auto p-4">
                <div className="py-4">
                    <p className="text-primary font-semibold text-xl mb-1">{cpme.step}</p>
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
                    {stepsData?.map((item) => (
                        <div
                            key={item.id}
                            className="w-full h-full min-h-96 p-14 space-y-8 flex flex-col justify-start items-start gap-4 border-3 border-primary rounded-sm"
                        >
                            <div className="relative w-20 h-20 select-none pointer-events-none">
                                <Image
                                    className='w-auto h-auto'
                                    width={60}
                                    height={80}
                                    alt="Badge Azul CPME"
                                    src={item.image}
                                />
                                <p className="text-3xl text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    {item.id}.
                                </p>
                            </div>
                            <h4 className="text-2xl text-default font-semibold">
                                {item.title}
                            </h4>

                            <p className="text-lg text-default font-medium">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className='w-full py-4 mt-8'>
                    <span className='bg-primary text-lg text-white font-bold px-6 py-3'>{warn.warning}</span>
                    <p className='text-md text-default font-normal mt-8'>{warn.warningText}</p>
                </div>
            </div>
        </section>
    )
}

export default SectionCpme