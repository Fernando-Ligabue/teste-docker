import { asscociatePageContent } from '@/lib/constants';
import React from 'react'

const SectionBlue = () => {
    const blue = asscociatePageContent?.[0]?.sectionBlue?.[0];

    return (
        <section className="relative overflow-hidden w-full max-w-container bg-primary py-20 lg:py-28">
            <div className="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center mx-auto p-4">
                <h3 className='text-2xl sm:text-5xl/20 text-white font-bold'>{blue.text}</h3>
            </div>
        </section>
    )
}

export default SectionBlue