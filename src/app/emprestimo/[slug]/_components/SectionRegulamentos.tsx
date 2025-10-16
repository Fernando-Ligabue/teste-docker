"use client"

import CustomLink from '@/components/reusable/CustomLink';
import { emprestimosPageContent } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

interface SectionRegulamentoProps {
    slug: string;
}

const SectionRegulamento: React.FC<SectionRegulamentoProps> = ({ slug }) => {
    const contentPageData = emprestimosPageContent[0].contentPages[slug];
    const { sectionData } = contentPageData;

    if (!contentPageData) {
        return <div>Conteúdo não encontrado para este empréstimo.</div>;
    }


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

                        <h4 className='w-full font-semibold text-xl sm:text-3xl text-emprestimos'>{sectionData.title}</h4>
                        <a
                            href={sectionData.linkPdf}
                            target="_blank" rel="noopener noreferrer"
                            className=" flex-center gap-2 bg-primary hover:bg-white text-white hover:text-primary border-1 hover:border-1 border-primary rounded-2xl px-4 py-2.5 transition-colors duration-200">
                            {sectionData.textRegulamento} <ArrowUpRight size={24} />
                        </a>
                    </div>

                    <div className='w-full flex flex-col gap-6'>
                        <h4 className='font-medium text-xl sm:text-3xl text-default'>Aproveite todas as vantagens de ser associado!</h4>
                        <div className='flex flex-col sm:flex-row gap-6'>
                            <CustomLink
                                href="/associados"
                                icon={<ArrowUpRight size={18} />}
                                iconPosition="right"
                                backgroundColor="bg-transparent hover:bg-black/90"
                                textColor="text-default hover:text-white"
                                borderColor="border-black"
                                rounded='rounded-2xl'
                            >
                                Torne-se Associado
                            </CustomLink>

                            <CustomLink
                                href="/contactos"
                                icon={<ArrowUpRight size={18} />}
                                iconPosition="right"
                                backgroundColor="bg-primary hover:bg-white"
                                textColor="text-white hover:text-primary"
                                borderColor="border-primary"
                                rounded='rounded-2xl'
                            >
                                Peça já a sua simulação
                            </CustomLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionRegulamento;
