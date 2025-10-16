import BlockHeader1 from '@/components/reusable/BlockHeader1'
import { privacyPolicePageContent } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'

const HeroPrivacyPolice = () => {
    const hero = privacyPolicePageContent.heroContent[0]
    const logoBlue = "/CPME/assets/images/globals/logoBlue.svg"
    return (
        <section className="min-h-[60vh] w-full flex flex-col justify-end lg:justify-center items-center relative bg-hover-blue">
            <div className="w-full lg:w-2/3 max-w-container flex justify-between items-center pt-24 pb-8 relative">
                <div className='w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center items-end sm:items-center gap-8 p-4'>
                    <div className="w-full">
                        <BlockHeader1
                            label={hero.label}
                            heading={hero.heading}
                            headingSize="text-2xl sm:text-4xl"
                        />
                    </div>
                    <div className="w-1/2 flex justify-end lg:justify-start">
                        <Image
                            width={60}
                            height={60}
                            alt="CPME - Caixa de Previdência do Ministério da Educação"
                            src={logoBlue}
                            className="w-full max-w-16 h-full max-h-16"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroPrivacyPolice