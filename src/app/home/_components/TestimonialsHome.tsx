import BlockHeader2 from '@/components/reusable/BlockHeader2'
import { homePageContent } from '@/lib/constants';
import React from 'react'
import Testimonials from './Testimonials';

const TestimonialsHome = () => {
      const testimonials = homePageContent?.testimonialsSection[0];
    
    return (
        <section className='relative overflow-hidden w-full max-w-container bg-[80%_center] xl:bg-[center_top] bg-cover bg-no-repeat py-20'
            style={{
                backgroundImage: `url(${testimonials.background})`,
            }}
        >
            <div className='max-w-screen-xl flex flex-col justify-between items-start mx-auto p-4'>
                <div className='w-full'>
                    <BlockHeader2
                        label={testimonials.label}
                        heading=""
                        dashColor="bg-primary"
                        labelColor="text-primary"
                        headingColor="text-primary"
                    />

                    <Testimonials />
                </div>
            </div>
        </section>
    )
}

export default TestimonialsHome