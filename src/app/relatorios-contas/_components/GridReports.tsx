"use client"

import Pagination from '@/components/reusable/Pagination';
import { relatoriosContasPageContent } from '@/lib/constants';
import React, { useState, useRef } from 'react'
import { CgFileDocument } from "react-icons/cg";


const GridReports = () => {
    const sectionTitle = relatoriosContasPageContent?.[0]?.sectionTitle;
    const cpme = relatoriosContasPageContent?.[0]?.sectionRelatorios;

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cpme?.slice(indexOfFirstItem, indexOfLastItem);

    const resultsRef = useRef<HTMLDivElement>(null);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section className="relative overflow-hidden w-full max-w-container py-20 lg:py-28">
            <div className="max-w-screen-xl flex flex-col justify-between items-center md:gap-10 mx-auto p-4" ref={resultsRef}>
                <h2 className='w-full text-center sm:text-left text-primary text-3xl font-semibold'>{sectionTitle}</h2>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                    {currentItems.map((item, index) => (
                        <div key={index} className='min-h-64 flex flex-col justify-between items-start border-2 border-primary rounded-sm p-8'>
                            <div>
                                <span className='text-primary text-sm font-semibold'>{item.entity}</span>
                                <p className='text-default text-lg font-semibold'>{item.title} {item.year}</p>
                            </div>
                            <a href={item.doc} target="_blank" rel="noopener noreferrer" className='w-full flex justify-end items-center gap-2'>
                                <span className='text-primary text-base font-medium hidden lg:block'>Download</span>
                                <div className='bg-primary rounded-full p-1'>
                                    <CgFileDocument size={24} className="text-white" />
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="w-full flex justify-center sm:justify-end items-center gap-1">
                    {cpme.length > itemsPerPage && (
                        <div className="mt-8 flex items-center gap-2">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={Math.ceil(cpme.length / itemsPerPage)}
                                onPageChange={paginate}
                                pageRangeDisplayed={2}
                                siblingCount={2}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default GridReports