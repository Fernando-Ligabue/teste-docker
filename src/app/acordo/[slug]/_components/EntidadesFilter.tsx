"use client";

import { useState, useMemo, useRef } from 'react';
import { Entidade } from '@/lib/types';
import Pagination from '@/components/reusable/Pagination';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CustomButton from '@/components/reusable/CustomButton';
import { ArrowUpRight, ChevronLeft, ChevronRight, Globe, Mail, MapPin } from 'lucide-react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';

type EntidadesFilterProps = {
    entidades: Entidade[];
};

const EntidadesFilter = ({ entidades }: EntidadesFilterProps) => {
    const [selectedLocation, setSelectedLocation] = useState<string>('all');
    const [appliedLocation, setAppliedLocation] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const locations = useMemo(() => {
        const all = entidades.map(e => e.location);
        return Array.from(new Set(all)).sort();
    }, [entidades]);

    const handleToggle = (id: number) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    const filteredEntidades = entidades.filter(entidade =>
        appliedLocation === 'all' ? true : entidade.location === appliedLocation
    );

    const totalPages = Math.ceil(filteredEntidades.length / itemsPerPage);
    const paginatedEntidades = filteredEntidades.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleFilter = () => {
        setAppliedLocation(selectedLocation);
        setCurrentPage(1);
    };

    const resultsSectionRef = useRef<HTMLDivElement>(null);

    const scrollToTop = () => {
        resultsSectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        scrollToTop();
    };

    return (
        <section className="relative overflow-hidden w-full max-w-container py-20">
            <div className="max-w-screen-xl flex flex-col justify-between items-start mx-auto p-4 space-y-8" ref={resultsSectionRef}>
                <h2 className="text-primary text-2xl sm:text-3xl font-semibold">Filtrar Entidades</h2>
                <div className="w-full mx-auto">
                    <div className="w-full">
                        {/* Filtro por localização */}
                        <div className="mb-6 flex flex-wrap gap-4 items-end">
                            <div className="w-full lg:w-1/3 flex justify-start items-end gap-4">
                                <div className="w-full max-w-60">
                                    <label className="text-xs font-medium text-primary px-4">Localização</label>
                                    <Select
                                        value={selectedLocation}
                                        onValueChange={(value) => {
                                            setSelectedLocation(value);
                                        }}
                                    >
                                        <SelectTrigger className="w-full font-semibold border-transparent border-b-2 border-b-primary rounded-none focus:border-none">
                                            <SelectValue placeholder="Todas as localizações" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white text-default border-none">
                                            <SelectItem value="all">Todas as localizações</SelectItem>
                                            {locations.map((loc) => (
                                                <SelectItem key={loc} value={loc}>
                                                    {loc}
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

                        {/* Lista de entidades */}
                        <div className="space-y-4">
                            {paginatedEntidades.length > 0 ? (
                                paginatedEntidades.map(entidade => (
                                    <div key={entidade.id} className="border-b border-primary py-4 flex flex-col sm:flex-row justify-between items-stretch gap-6">
                                        {/* image */}
                                        <div className="w-full max-w-44 mx-auto sm:mx-0 flex-center flex-col">
                                            {entidade.imageUrl ? (
                                                <a href={entidade.websiteUrl} target="_blank" rel="noopener noreferrer">
                                                    <img src={entidade.imageUrl} alt={entidade.entidade}
                                                        className='w-full max-w-40'
                                                    />
                                                </a>
                                            ) : (
                                                <p className="font-semibold">{entidade.entidade}</p>
                                            )}
                                        </div>

                                        {/* infos */}
                                        <div className='flex flex-1 flex-col justify-between items-start gap-14'>
                                            <div className='w-full'>
                                                <div className="w-full flex justify-between gap-6">

                                                    <div className="w-full">
                                                        <span className="text-xs text-primary">Entidade</span>
                                                        <h3 className="font-semibold">{entidade.entidade}</h3>
                                                    </div>

                                                    <div className="w-full">
                                                        <span className="text-xs text-primary">Localização</span>
                                                        <p className="font-semibold">{entidade.location}</p>
                                                    </div>

                                                    {/* email location website */}
                                                    <div className='w-full max-w-24 flex flex-col sm:flex-row justify-between items-center gap-4'>
                                                        {entidade.websiteUrl && (
                                                            <a href={entidade.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-primary">
                                                                <Globe size={24} />
                                                            </a>
                                                        )}
                                                        <a href={entidade.coordinates} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                                                            <MapPin size={24} />
                                                        </a>
                                                        <a href={`mailto:${entidade.email}`} className="text-sm text-primary"><Mail size={24} /></a>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* beneficio e download */}
                                            <div className='w-full flex flex-col sm:flex-row justify-between items-start gap-6'>
                                                <div>
                                                    <p><strong>Benefícios:</strong></p>
                                                    <p>{entidade.benefits}</p>
                                                </div>
                                                <div className='min-w-max flex items-end'>
                                                    {entidade.pdfDocument && (
                                                        <a href={entidade.pdfDocument} target="_blank" rel="noopener noreferrer" className="w-full text-white text-sm bg-primary py-2 px-4 rounded-xl">
                                                            Download PDF
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-500">Nenhum contrato encontrado.</p>
                            )}
                        </div>

                        {/* Paginação */}
                        <div className="w-full flex justify-center sm:justify-end items-center mt-6 gap-1">
                            {totalPages > 1 && (
                                <div className="mt-8 flex items-center gap-2">
                                    {totalPages >= 3 && (
                                        <div className="w-full hidden sm:flex justify-end items-center gap-2">
                                            <button
                                                onClick={() => handlePageChange(1)}
                                                disabled={currentPage === 1}
                                                className="flex items-center justify-center p-2 rounded-md bg-transparent border-transparent cursor-pointer disabled:opacity-50"
                                            >
                                                <HiChevronDoubleLeft className="w-5 h-5 text-primary" />
                                            </button>

                                            <button
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="flex items-center justify-center p-2 rounded-md bg-transparent border-transparent cursor-pointer disabled:opacity-50"
                                            >
                                                <ChevronLeft className="w-5 h-5 text-primary" />
                                            </button>
                                        </div>
                                    )}
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                        pageRangeDisplayed={2}
                                        siblingCount={2}
                                    />
                                    {totalPages >= 3 && (
                                        <div className="w-full hidden sm:flex items-center gap-2">
                                            <button
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                                className="flex items-center justify-center p-2 rounded-md bg-transparent border-transparent cursor-pointer disabled:opacity-50"
                                            >
                                                <ChevronRight className="w-5 h-5 text-primary" />
                                            </button>

                                            <button
                                                onClick={() => handlePageChange(totalPages)}
                                                disabled={currentPage === totalPages}
                                                className="flex items-center justify-center p-2 rounded-md bg-transparent border-transparent cursor-pointer disabled:opacity-50"
                                            >
                                                <HiChevronDoubleRight className="w-5 h-5 text-primary" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EntidadesFilter;