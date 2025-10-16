import React from 'react'
import SlideCardsHome from './SlideCardsHome'
import BlockHeader3 from '@/components/reusable/BlockHeader3'
import { ArrowUpRight } from 'lucide-react'
import CustomLink from '@/components/reusable/CustomLink'
import { Marquee } from '@/components/reusable/Marquee'
import { homePageContent } from '@/lib/constants'

const SectionMarquee = () => {
      const benefitsSection = homePageContent?.sectionMarquee?.[0];
      const insuranceSection = homePageContent?.safeInsuranceSection[0];
    
    return (
        <section className='relative overflow-hidden w-full max-w-container bg-primary py-14'>
            <div className='max-w-screen-xl flex flex-col lg:flex-row justify-between items-start sm:items-center mx-auto p-4'>
                <BlockHeader3
                    label={benefitsSection.label}
                    heading=""
                    dashColor="bg-white"
                    labelColor="text-white"
                    headingColor="text-white"
                />
            </div>

            <Marquee
                lines={[benefitsSection.rotateText1,benefitsSection.rotateText2,]}
                className="text-lg font-medium bg-gray-100 py-2"
                speed={320}
            />

            <div className='max-w-screen-xl flex flex-col lg:flex-row justify-between items-start sm:items-center mx-auto px-4 py-20'>
                <CustomLink
                    href="/acordos"
                    icon={<ArrowUpRight size={18} />}
                    iconPosition="right"
                    backgroundColor="bg-transparent hover:bg-black/90"
                    textColor="text-white"
                    borderColor="border-white"
                    rounded='rounded-full'
                >
                    Ler Mais
                </CustomLink>
            </div>

            <div className='max-w-screen-xl flex flex-col justify-between items-start mx-auto p-4'>
                <BlockHeader3
                    label={insuranceSection.label}
                    heading={insuranceSection.heading}
                    dashColor="bg-white"
                    labelColor="text-white"
                    headingColor="text-white"
                    headingWeight='font-medium'
                    headingSize='text-xl sm:text-3xl'
                />

                <SlideCardsHome />
            </div>
        </section>

    )
}

export default SectionMarquee