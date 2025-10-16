import BlockHeader2 from '@/components/reusable/BlockHeader2'
import { emprestimosPageContent } from '@/lib/constants';
import Image from 'next/image';
import React from 'react'

interface SectionEmprestimoProps {
    slug: string;
}

const SectionEmprestimo: React.FC<SectionEmprestimoProps> = ({ slug }) => {
    const contentPageData = emprestimosPageContent[0].contentPages[slug];

    if (!contentPageData) {
        return <div>Conteúdo não encontrado para este slug.</div>;
    }

    const { sectionDescript } = contentPageData;

    return (
        <section className="relative overflow-hidden w-full max-w-container py-20 lg:py-28">
            <div className="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center md:gap-14 mx-auto p-4">
                <div className="w-full lg:w-2/3">
                    <BlockHeader2
                        heading={sectionDescript.title}
                        dashColor="bg-black"
                        labelColor="text-default"
                        headingColor="text-default"
                        descriptionText={sectionDescript.description}
                        headingSize="text-2xl lg:text-3xl"
                    />
                    {sectionDescript.description2 && (
                        <div className='flex flex-col justify-start items-start gap-1 max-w-screen-xl p-4'>
                            <p className={`w-full max-w-screen-sm text-default text-sm sm:text-base`}>
                                {sectionDescript.description2}
                            </p>
                        </div>
                    )}
                </div>
                <div className='w-full sm:w-1/2 md:p-8'>
                    <Image
                        width={650}
                        height={650}
                        alt='CPME - Caixa de Previdência do Ministério da Educação'
                        src={sectionDescript.imageUrl}
                        className='rounded-sm'
                    />
                </div>
            </div>
        </section>
    );
}

export default SectionEmprestimo;
