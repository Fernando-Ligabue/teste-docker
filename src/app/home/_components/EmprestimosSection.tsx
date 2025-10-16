import BlockHeader2 from '@/components/reusable/BlockHeader2'
import CustomLink from '@/components/reusable/CustomLink'
import { homePageContent } from '@/lib/constants'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const EmprestimosSection = () => {
    const emprestimosContent = homePageContent?.emprestimosSection[0];
    return (
        <section className='relative overflow-hidden w-full max-w-container bg-bg-section py-20 lg:py-36'>
            <div className='max-w-screen-xl flex flex-col lg:flex-row justify-between items-center mx-auto space-y-14 p-4'>
                <div className='w-full space-y-8'>
                    <BlockHeader2
                        label={emprestimosContent.label}
                        heading={emprestimosContent.heading}
                        dashColor="bg-black"
                        labelColor="text-default"
                        headingColor="text-default"
                        maxWidthSection='max-w-lg'
                    />

                    <CustomLink
                        href="/emprestimos"
                        icon={<ArrowUpRight size={18} />}
                        iconPosition="right"
                        backgroundColor="bg-transparent hover:bg-black/90"
                        textColor="text-default hover:text-white"
                        borderColor="border-black"
                        rounded='rounded-full'
                    >
                        Ler Mais
                    </CustomLink>
                </div>
                <div className='w-full'>
                    <Image
                        width={600}
                        height={500}
                        alt='CPME - Caixa d Previdência do Ministério da Educação'
                        src={emprestimosContent.imgHighlight}
                        className='relative object-cover w-auto h-full'
                    />
                </div>
            </div>
        </section>
    )
}

export default EmprestimosSection