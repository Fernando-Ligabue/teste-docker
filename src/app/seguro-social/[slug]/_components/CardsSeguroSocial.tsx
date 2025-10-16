import { segurosPageContent } from '@/lib/constants';
import Image from 'next/image';
import React from 'react';

interface CardsSegurosSociais {
    slug: string;
}

const CardsSegurosSociais: React.FC<CardsSegurosSociais> = ({ slug }) => {
    const contentPageData = segurosPageContent[0].contentPages[slug];
    const { sectionCards } = contentPageData;

    if (!contentPageData) {
        return <div>Conteúdo não encontrado para este empréstimo.</div>;
    }


    return (
        <section className="relative overflow-hidden w-full max-w-container bg-bg-section py-20">
            <div className="max-w-screen-xl flex flex-col justify-between items-start md:gap-14 mx-auto p-4">
                <h2 className='text-3xl text-seguros font-medium p-4'>Vantagens</h2>
                <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
                    {Object.entries(sectionCards).map(([key, card], index) => (
                        <div
                            key={card.id}
                            className="w-full h-full min-h-96 p-6 sm:p-14 space-y-8 flex flex-col justify-start items-start gap-4 border-3 border-primary rounded-sm"
                        >
                            <div className="relative w-20 h-20 select-none pointer-events-none">
                                <Image
                                    className='w-auto h-auto'
                                    width={60}
                                    height={80}
                                    alt="Badge Azul CPME"
                                    src={card.image}
                                />
                                <p className="text-3xl text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    {card.id}.
                                </p>
                            </div>
                            <h4 className="text-2xl text-default font-semibold">
                                {card.title}
                            </h4>

                            <div className='space-y-2'>
                                <p className="text-lg text-default font-medium">
                                    {card.description}
                                </p>
                                {card.description2 && (
                                    <p className="text-lg text-default font-medium">
                                        {card.description2}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardsSegurosSociais;
