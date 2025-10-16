"use client"

import CustomLink from '@/components/reusable/CustomLink';
import { segurosPageContent } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

interface SectionRegulamentoProps {
    slug: string;
}

const SectionRegulamento: React.FC<SectionRegulamentoProps> = ({ slug }) => {
    const contentPageData = segurosPageContent[0].contentPages[slug];
    const { sectionData } = contentPageData;

    return (
        <section className="relative overflow-hidden w-full max-w-container py-20">
            <div className="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center md:gap-14 mx-auto p-4">
                <div className='max-w-screen-xl flex flex-col justify-start items-start p-4 space-y-14'>
                    <div className='w-full flex flex-col justify-start items-start space-y-8'>
                        <img
                            src={sectionData.icon}
                            alt='Empréstimos CPME'
                            className='w-full max-w-16'
                        />

                        <h4 className='w-full font-semibold text-xl sm:text-3xl text-seguros'>{sectionData.title}</h4>
                    </div>

                    <div className='w-full flex flex-col gap-6 pt-10'>
                        <h4 className='font-medium text-xl sm:text-3xl text-default'>Aproveite todas as vantagens de ser associado!</h4>
                        <div className='flex flex-col sm:flex-row gap-6'>
                            <a
                                href={sectionData.linkSubscricao}
                                target='_blank'
                                className="flex justify-between items-center gap-4 px-4 py-2.5 text-default hover:text-white bg-white hover:bg-black border-1 border-black rounded-2xl"
                            >
                                Subscrever Seguro <ArrowUpRight size={18} />
                            </a>

                            <a
                                href={sectionData.linkRegulamento}
                                target='_blank'
                                className="flex justify-between items-center gap-4 px-4 py-2.5 text-white hover:text-primary bg-primary hover:bg-white border-1 border-primary rounded-2xl"
                            >
                                Regulamento Novos Seguros <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionRegulamento;
