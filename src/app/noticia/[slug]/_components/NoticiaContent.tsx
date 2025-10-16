import React from 'react';
import { newsPageContent } from '@/lib/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import ImageNewsComponent from './ImageNewsComponent';
import ShareButtons from './ShareButtons';

export async function generateStaticParams() {
    return [
        { slug: 'tomada-de-posse-novos-orgaos' },
        { slug: 'pascoa-2025' },
        { slug: 'assembleia-geral-ordinaria-2025' },
        { slug: 'cpme-redes-sociais' },
        { slug: 'boas-festas-feliz-2025' },
        { slug: 'assembleia-eleitoral-2024' },
        { slug: 'dia-mae-2024' },
        { slug: 'pascoa-2024' },
        { slug: 'assembleia-geral-ordinaria21-03-24' },
        { slug: 'encerramento-carnaval' },
    ];
}

export default async function NoticiaContent({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const validSlugs = [
        'tomada-de-posse-novos-orgaos',
        'pascoa-2025',
        'assembleia-geral-ordinaria-2025',
        'cpme-redes-sociais',
        'boas-festas-feliz-2025',
        'assembleia-eleitoral-2024',
        'dia-mae-2024',
        'pascoa-2024',
        'assembleia-geral-ordinaria21-03-24',
        'encerramento-carnaval',
    ];

    if (!validSlugs.includes(slug)) {
        notFound();
    }

    const contentPageData = newsPageContent[0].contentNoticia[slug as string];
    const date = contentPageData.content[0].date;
    const excerpt = contentPageData.content[0].excerpt;
    const content = contentPageData.content[0].content
    const images: string[] = Array.isArray(contentPageData.content[0].images)
        ? contentPageData.content[0].images
        : [];

    if (!contentPageData) {
        notFound();
    }

    return (
        <>
            <section className="relative overflow-hidden w-full max-w-container py-20 lg:py-28">
                <div className="max-w-screen-xl flex flex-col justify-between items-center md:gap-14 mx-auto p-4">
                    <div className='w-full space-y-6'>
                        <span className='block text-primary font-normal'>{date}</span>
                        <h2 className='text-3xl text-primary font-semibold'>{contentPageData.heading}</h2>
                        <small className='block font-medium'>{excerpt}</small>
                        <div className='space-y-4'>
                            {content.map((item, index) => (
                                <p key={index} className='text-xl text-default font-normal'>{item}</p>
                            ))}
                        </div>
                        <ImageNewsComponent images={images} />
                    </div>

                    <div className='w-full flex flex-col sm:flex-row justify-between items-center gap-8 mt-14 sm:mt-0'>
                        <div>
                            <Link href="/noticias" className='flex items-center gap-2'>
                                <ChevronLeft size={24} className='text-primary' /> Voltar para notícias
                            </Link>
                        </div>
                        <ShareButtons title={contentPageData.heading} />
                    </div>
                </div>
            </section>
        </>
    );
}
