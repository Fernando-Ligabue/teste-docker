"use client"

import Pagination from '@/components/reusable/Pagination'
import { newsPageContent } from '@/lib/constants';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useRef, useState } from 'react'

const GridNews = () => {
    const sectionContent = newsPageContent?.[0]?.contentNoticia;

    const newsSlugs = Object.keys(sectionContent);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = newsSlugs
        .map((slug) => sectionContent[slug].content[0])
        .slice(indexOfFirstItem, indexOfLastItem);

    const resultsRef = useRef<HTMLDivElement>(null);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section className="relative overflow-hidden w-full max-w-container py-20 lg:py-28">
            <div className="max-w-screen-xl flex flex-col justify-between items-center md:gap-14 mx-auto p-4" ref={resultsRef}>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-8 gap-y-24 mt-8'>
                    {currentItems.map((item, index) => (
                        <Link href={`noticia/${item.slug}`}  key={index} className='flex flex-col justify-between items-start space-y-4 rounded-sm'>
                            <div className='w-full min-h-64 flex flex-col justify-between items-center rounded-sm shadow-sm space-y-4 object-cover'>
                                <img src={item.banner} alt={item.title} className='rounded-sm object-cover w-full max-h-80 overflow-hidden' />
                            </div>
                            <span className='text-xs font-medium uppercase'>{item.date}</span>
                            <h3 className='text-xl text-primary font-semibold'>{item.title}</h3>
                            <p className='text-sm font-medium'>{item.excerpt}</p>
                            <span className='block bg-primary w-6 h-0.5'></span>
                            <div className='w-full flex justify-between items-center gap-2'>
                                <small className='text-xs text-default font-semibold'>{item.subject}</small>
                                <ChevronRight size={28} className='text-primary' />
                            </div>
                        </Link>
                    ))}
                </div>
                {newsSlugs.length > itemsPerPage && (
                    <div className="mt-8 ml-auto">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={Math.ceil(newsSlugs.length / itemsPerPage)}
                            onPageChange={paginate}
                            pageRangeDisplayed={12}
                            siblingCount={12}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default GridNews;
