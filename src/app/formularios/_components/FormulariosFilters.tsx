"use client"

import React, { useState, useMemo } from 'react';
import { Formularios } from '@/lib/types';
import Pagination from '@/components/reusable/Pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CustomButton from '@/components/reusable/CustomButton';
import { ArrowUpRight } from 'lucide-react';
import { CgFileDocument } from 'react-icons/cg';

type FormulariosFilterProps = {
    formulario: Formularios[];
};

const FormulariosFilter = ({ formulario }: FormulariosFilterProps) => {
    const [selectedDate, setSelectedDate] = useState<string>('all');
    const [appliedDate, setAppliedDate] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);

    const hasDates = useMemo(() => formulario.some(form => form.date), [formulario]);

    const formatDate = (date: Date | undefined): string => {
        if (!date) {
            return '';
        }

        return date.toLocaleDateString('pt-PT', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
    };

    const dates = useMemo(() => {
        const all = formulario.map(e => e.date).filter(date => date !== undefined);
        return Array.from(new Set(all.map(date => formatDate(date)))).sort();
    }, [formulario]);

    const filteredForms = formulario.filter(formulario => {
        const formattedDate = formulario.date ? formatDate(formulario.date) : '';
        return appliedDate === 'all' ? true : formattedDate === appliedDate;
    });

    const totalPages = Math.ceil(filteredForms.length / itemsPerPage);
    const paginatedForms = filteredForms.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleFilter = () => {
        setAppliedDate(selectedDate);
        setCurrentPage(1);
    };

    return (
        <section className='relative overflow-hidden w-full max-w-container py-20'>
            <div className='max-w-screen-xl flex flex-col justify-between items-start mx-auto p-4 space-y-8'>
                {!hasDates && <h2 className='text-primary text-2xl sm:text-3xl font-semibold'>Formulários</h2>}
                {hasDates && <h2 className='text-primary text-2xl sm:text-3xl font-semibold'>Filtrar Documentos</h2>}

                <div className="w-full mx-auto space-y-14">
                    {hasDates && (
                        <div className="flex flex-wrap gap-4 items-end">
                            <div className="w-full lg:w-1/3 flex justify-start items-end gap-4">
                                <div className='w-full max-w-60'>
                                    <label className="text-xs font-medium text-primary px-4">Data</label>
                                    <Select
                                        value={selectedDate || 'all'}
                                        onValueChange={(value) => {
                                            setSelectedDate(value);
                                        }}
                                    >
                                        <SelectTrigger className="w-full font-semibold border-transparent border-b-2 border-b-primary rounded-none focus:border-none">
                                            <SelectValue placeholder="Todas as localizações" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white text-default border-none">
                                            <SelectItem value="all">Todas as datas</SelectItem>
                                            {dates.map((date) => (
                                                <SelectItem key={date} value={date}>
                                                    {date}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <CustomButton
                                    backgroundColor="bg-primary"
                                    textColor="text-white"
                                    onClick={handleFilter}
                                    icon={ArrowUpRight}
                                >
                                    Aplicar
                                </CustomButton>
                            </div>
                        </div>
                    )}

                    {/* Grid de form */}
                    <div className="grid gird-cols-1 sm:grid-cols-3 items-stretch gap-8 space-y-4">
                        {paginatedForms.length > 0 ? (
                            paginatedForms.map(form => (
                                <div key={form.id} className='min-h-64 h-full flex flex-col justify-between items-start border-2 border-primary rounded-sm px-4 py-8 sm:p-8'>
                                    <div>
                                        <span className='text-sm text-primary font-light'>{form.model}</span>
                                        <p className='text-default text-xl font-semibold'>{form.title}</p>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        {form.date && <p className=' w-full font-normal text-sm text-primary'>{formatDate(form.date)}</p>}
                                        <a href={form.pdfDocument} target="_blank" rel="noopener noreferrer" className='w-full flex justify-end items-center gap-2'>
                                            <span className='text-primary text-base font-medium hidden lg:block'>Download</span>
                                            <div className='bg-primary rounded-full p-1'>
                                                <CgFileDocument size={24} className="text-white" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">Nenhum formulário encontrado.</p>
                        )}
                    </div>

                    {/* Paginação */}
                    {totalPages > 1 && (
                        <div className="mt-8">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                                pageRangeDisplayed={12}
                                siblingCount={12}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FormulariosFilter;
