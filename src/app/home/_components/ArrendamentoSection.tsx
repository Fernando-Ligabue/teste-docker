import BlockHeader3 from '@/components/reusable/BlockHeader3'
import CustomLink from '@/components/reusable/CustomLink'
import { homePageContent } from '@/lib/constants'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ArrendamentoSection = () => {
    const arrendamentoContent = homePageContent?.arrendamentoSection[0];
  return (
          <section className='relative overflow-hidden w-full max-w-container py-14 lg:py-24'>
            <div className='max-w-screen-xl flex flex-col justify-between items-start mx-auto p-4 space-y-14' >
              <BlockHeader3
                label={arrendamentoContent.label}
                heading=""
                dashColor="bg-black"
                labelColor="text-default"
                headingColor="text-default"
                headingWeight='font-medium'
                headingSize='text-xl sm:text-3xl'
              />
    
              <div className='max-w-screen-sm p-4 flex flex-col sm:flex-row gap-6'>
                <CustomLink
                  href="/arrendamento"
                  icon={<ArrowUpRight size={18} />}
                  iconPosition="right"
                  backgroundColor="bg-transparent hover:bg-black/90"
                  textColor="text-default hover:text-white"
                  borderColor="border-black"
                  rounded='rounded-full'
                >
                  Arrendamendo Habitacional
                </CustomLink>
    
                <CustomLink
                  href="/arrendamento"
                  icon={<ArrowUpRight size={18} />}
                  iconPosition="right"
                  backgroundColor="bg-primary hover:bg-white"
                  textColor="text-white hover:text-primary"
                  borderColor="border-primary"
                  rounded='rounded-full'
                >
                  Arrendamendo Comercial
                </CustomLink>
              </div>
    
    
              <div className='w-full  mx-auto flex items-center justify-center'>
                <Image
                  width={1250}
                  height={600}
                  alt='CPME - Caixa d Previdência do Ministério da Educação'
                  src={arrendamentoContent.image}
                  className='relative object-cover w-auto h-full'
                />
              </div>
            </div>
    
          </section>
    
  )
}

export default ArrendamentoSection