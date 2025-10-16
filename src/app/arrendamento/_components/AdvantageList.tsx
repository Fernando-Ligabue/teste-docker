import { arrendamentoPageContent } from '@/lib/constants';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';


const AdvantageList = () => {
    const contentPageData = arrendamentoPageContent[0].advantages;

    if (!contentPageData) {
        return (
            notFound()
        );
    }


    return (
        <section className="relative overflow-hidden w-full max-w-container bg-bg-section py-20">
            <div className="max-w-screen-xl flex flex-col justify-between items-start md:gap-14 mx-auto p-4">
                <h2 className='text-3xl text-seguros font-medium p-4'>Vantagens</h2>
                <div className="w-full p-4 flex-center flex-col gap-8">
                    {Object.entries(contentPageData).map(([key, card]) => (
                        <div
                            key={card.id}
                            className="w-full h-full p-6 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 border-3 border-primary rounded-sm"
                        >
                            <div className="relative min-w-20 min-h-20 select-none pointer-events-none">
                                <Image
                                    className='w-auto h-auto'
                                    width={60}
                                    height={80}
                                    alt="Badge Azul CPME"
                                    src={card.icon}
                                />
                                <p className="text-3xl text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    {card.id}.
                                </p>
                            </div>
                            <h4 className="max-w-screen-lg text-xl sm:text-2xl text-default">
                                <strong>{card.strongText}</strong> {card.descriptionText}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvantageList;
