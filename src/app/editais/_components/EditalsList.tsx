"use client";

import { useState } from 'react';
import { editalsPageContent } from '@/lib/constants';
import Pagination from '@/components/reusable/Pagination';

const EditalsList = () => {
    const editalsData = editalsPageContent?.[0]?.editals || [];

    const [expandedItem, setExpandedItem] = useState<number | null>(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const toggleExpand = (id: number) => {
        setExpandedItem(prev => (prev === id ? null : id));
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('pt-PT', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentEditals = editalsData.slice(startIndex, endIndex);

    return (
        <div className="w-full mx-auto">
            <div className="w-full">
                <div className="space-y-4">
                    {currentEditals.length > 0 ? (
                        currentEditals.map(edital => (
                            <div key={edital.id} className="border-b border-primary py-4">
                                <div className="flex justify-between items-start">
                                    <div className='w-full flex flex-col sm:flex-row justify-between items-start gap-6'>
                                        <div className='w-full sm:w-2/4 p-0.5'>
                                            <span className="block text-xs font-medium text-primary">Nome</span>
                                            <h3 className="font-semibold">{edital.name}</h3>
                                        </div>

                                        <div className='w-full sm:w-1/4 p-0.5'>
                                            <span className="block text-xs font-medium text-primary">Nº Sócio</span>
                                            <p className="text-sm text-default font-semibold">{edital.socialNumber}</p>
                                        </div>

                                        <div className='w-full sm:w-1/4 p-0.5'>
                                            <span className="block text-xs font-medium text-primary">Data</span>
                                            <p className="text-sm text-default font-semibold">{formatDate(edital.date)}</p>
                                        </div>

                                        <div className='w-full sm:w-1/5 p-0.5 sm:flex-center flex-col'>
                                            <button
                                                onClick={() => toggleExpand(edital.id)}
                                                className={`flex items-center text-sm text-center w-32 px-6 py-2 rounded-xl cursor-pointer ${expandedItem === edital.id ? 'text-primary bg-transparent border-primary border' : 'text-white bg-primary border border-transparent'}`}
                                            >
                                                {expandedItem === edital.id ? (
                                                    <span className='w-full text-center'>Ver menos</span>
                                                ) : (
                                                    <span className='w-full text-center'>Ver mais</span>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {edital.edito && (
                                    <div className="mt-2">
                                        {expandedItem === edital.id && (
                                            <div className='space-y-4'>
                                                <div className="mt-4 text-sm">
                                                    <p className='text-default text-md font-medium'>{edital.editoNumber}</p>
                                                </div>
                                                <div className="mt-4 text-sm">
                                                    <p className='text-default text-md'>{edital.edito}</p>
                                                </div>
                                                <div className="mt-4 text-sm">
                                                    <p className='text-default text-md'>{edital.responsible}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-center py-8 text-default font-medium">Nenhum edital encontrado. Por favor tente novamente.</p>
                    )}
                </div>

                {editalsData.length > itemsPerPage && (
                    <div className="mt-8">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={Math.ceil(editalsData.length / itemsPerPage)}
                            onPageChange={paginate}
                            pageRangeDisplayed={12}
                            siblingCount={12}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default EditalsList;