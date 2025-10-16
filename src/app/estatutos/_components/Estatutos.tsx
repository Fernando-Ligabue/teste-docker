import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import PDFViewer from './PdfViewer'
import TitleCenter from '@/components/reusable/TitleCenter'
import { estatutosPageContent } from '@/lib/constants'

const Estatutos = () => {
    const docs = estatutosPageContent?.[0]?.sectionDocs?.[0];

    return (
        <section className="relative overflow-hidden w-full max-w-container py-20 lg:py-28">
            <div className="max-w-screen-xl flex flex-col justify-between items-center md:gap-14 mx-auto p-4">
                <div className="w-full space-y-8">
                    <TitleCenter
                        heading={docs?.heading}
                        dashColor="bg-black"
                        labelColor="text-default"
                        headingColor="text-default"
                        descriptionText={docs?.descriptionText}
                        headingSize="text-2xl lg:text-4xl"
                    />
                </div>
                <div className='w-full max-h-screen overflow-scroll mb-8 scrollbar-none'>
                    {docs?.doc && <PDFViewer pdf={docs.doc} />}
                </div>

                <div className="w-full flex-center mt-4">
                    <a
                        href={docs.doc}
                        download
                        className="bg-primary hover:bg-white text-white hover:text-primary border border-primary p-2 rounded-xl flex items-center gap-2 px-8"
                    >
                        Download <ArrowUpRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Estatutos