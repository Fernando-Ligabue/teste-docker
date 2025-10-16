import BlockHeader2 from '@/components/reusable/BlockHeader2';
import { emprestimosPageContent } from '@/lib/constants';
import React from 'react'

const SectionCpme = () => {
    const emprestimosData = emprestimosPageContent[0]?.sectionCPME[0];
    const infosData = emprestimosPageContent[0]?.infoText[0];
    return (
        <section className='relative overflow-hidden w-full max-w-container py-10'>
            <div className='max-w-screen-xl flex flex-col justify-between items-start mx-auto p-4 space-y-8'>
                <BlockHeader2
                    heading={emprestimosData.heading}
                    dashColor="bg-black"
                    labelColor="text-default"
                    headingColor="text-default"
                    descriptionText={emprestimosData.descriptionText}
                    headingSize="text-2xl lg:text-3xl"
                    maxWidthHeading="max-w-full"
                    maxWidthDescription="max-w-full sm:max-w-6xl"
                />
            </div>

            <div className='max-w-screen-xl flex flex-col justify-start items-start mx-auto p-4'>
                <div className='w-full sm:max-w-2xl flex flex-col justify-start items-start space-y-8'>
                    <img
                        src={infosData.icon}
                        alt='Empréstimos CPME'
                        className='w-full max-w-24'
                    />

                    <h4 className='font-semibold text-xl sm:text-4xl text-emprestimos'>{infosData.title}</h4>
                </div>
            </div>
        </section>
    )
}

export default SectionCpme