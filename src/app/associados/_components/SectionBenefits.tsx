import BlockHeader2 from '@/components/reusable/BlockHeader2'
import CustomLink from '@/components/reusable/CustomLink'
import { asscociatePageContent } from '@/lib/constants'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SectionBenefits = () => {
    const benefitsIntro = asscociatePageContent?.[0]?.sectionBenefits?.intro;
    const benefitsData = asscociatePageContent[0]?.sectionBenefits?.benefitsData;
    const btnAssociate = asscociatePageContent[0]?.sectionBenefits?.btnAssociate;
    const btnSimulate = asscociatePageContent[0]?.sectionBenefits?.btnSimulate;

    return (
        <section className="relative overflow-hidden w-full max-w-container bg-bg-section py-20 lg:py-28">
            <div className="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center mx-auto p-4">
                <div className="w-full space-y-8">
                    <BlockHeader2
                        label={benefitsIntro.label}
                        heading={benefitsIntro.heading}
                        dashColor="bg-black"
                        labelColor="text-default"
                        headingColor="text-default"
                        headingSize="text-2xl lg:text-4xl"
                    />
                </div>
            </div>

            <div className="max-w-screen-xl flex flex-col justify-between items-start mx-auto p-4">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center">
                    {benefitsData?.map((item) => (
                        <Link href={item.link}
                            key={item.id}
                            className="w-full h-full min-h-[400px] sm:min-h-[685px] p-8 sm:p-14 space-y-8 flex flex-col justify-start items-start gap-4 rounded-sm bg-center bg-cover bg-no-repeat"
                            style={{
                                backgroundImage: `url(${item.imageUrl})`,
                            }}
                        >
                            <div className="relative w-full h-full select-none flex flex-col justify-end items-start">
                                <p className='text-xl sm:text-2xl text-white font-semibold'>{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className='w-full p-4 mt-8 flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-14'>
                    {btnAssociate && btnAssociate.length > 0 && btnAssociate.map((btn) => (
                        <CustomLink
                            key={btn.id}
                            href={btn.link}
                            icon={<ArrowUpRight size={18} />}
                            iconPosition="right"
                            backgroundColor="bg-transparent hover:bg-black/90"
                            textColor="text-default hover:text-white"
                            borderColor="border-black"
                            rounded="rounded-full"
                            className='w-full sm:w-max'
                        >
                            {btn.label}
                        </CustomLink>
                    ))}

                    {btnSimulate && btnSimulate.length > 0 && btnSimulate.map((btn) => (
                        <CustomLink
                            key={btn.id}
                            href={btn.link}
                            icon={<ArrowUpRight size={18} />}
                            iconPosition="right"
                            backgroundColor="bg-primary hover:bg-white"
                            textColor="text-white hover:text-primary"
                            borderColor="border-primary"
                            rounded="rounded-full"
                            className='w-full sm:w-max'
                        >
                            {btn.label}
                        </CustomLink>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SectionBenefits