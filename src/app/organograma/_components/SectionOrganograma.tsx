import { organogramaPageContent } from '@/lib/constants';
import Image from 'next/image'
import React from 'react'

const SectionOrganograma = () => {
    const cpme = organogramaPageContent?.[0]?.sectionOrganograma?.[0];

    return (
        <section className="relative overflow-hidden w-full max-w-container flex-center flex-col py-20 lg:py-28">
            <div className="w-full max-w-screen-xl max-auto flex-center p-4">
                <Image
                    width={800}
                    height={800}
                    alt="Organograma CPME"
                    src={cpme.image}
                    className='w-auto max-w-[1080px] h-full max-h-[1080px]'
                />
            </div>
        </section>
    )
}

export default SectionOrganograma