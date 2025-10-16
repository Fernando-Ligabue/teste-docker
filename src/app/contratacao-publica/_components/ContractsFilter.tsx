"use client";

import { useState, useRef, useEffect } from 'react';
import { cPublicaPageContent } from '@/lib/constants';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowUpRight, ChevronLeft, ChevronRight, Loader } from 'lucide-react';
import CustomButton from '@/components/reusable/CustomButton';
import Pagination from '@/components/reusable/Pagination';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { formatCurrency } from '@/lib/utils';

export function ContractsFilter() {
    const contractsData = cPublicaPageContent?.[0]?.contracts || [];

    const years = Array.from(
        new Set(
            contractsData
                .map(contract => contract.date?.getFullYear())
                .filter(year => !isNaN(year))
        )
    ).sort((a, b) => b - a);

    const currentYear = years.length > 0 ? years[0].toString() : new Date().getFullYear().toString();

    const [selectedYear, setSelectedYear] = useState<string>(currentYear);
    const [selectedMonth, setSelectedMonth] = useState<string>('all');
    const [filteredContracts, setFilteredContracts] = useState(contractsData);
    const [expandedItem, setExpandedItem] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(18);

    const resultsRef = useRef<HTMLDivElement>(null);
    const isPaginationAction = useRef(false);

    useEffect(() => {
        setIsLoading(true);
        const sortedContracts = [...contractsData].sort((a, b) => {
            const dateA = a.date ? a.date.getTime() : 0;
            const dateB = b.date ? b.date.getTime() : 0;
            return dateB - dateA;
        });

        setFilteredContracts(sortedContracts);
        setIsLoading(false);
    }, [contractsData]);

    const toggleExpand = (id: number) => {
        setExpandedItem(prev => (prev === id ? null : id));
    };

    const handleFilter = () => {
        setIsLoading(true);

        const filtered = contractsData.filter(contract => {
            const contractYear = contract.date?.getFullYear().toString();
            const contractMonth = (contract.date?.getMonth() + 1).toString();

            const yearMatch = selectedYear ? contractYear === selectedYear : true;
            const monthMatch = selectedMonth === 'all' || selectedMonth === contractMonth;

            return yearMatch && monthMatch;
        });

        const sortedFilteredContracts = [...filtered].sort((a, b) => {
            const dateA = a.date ? a.date.getTime() : 0;
            const dateB = b.date ? b.date.getTime() : 0;
            return dateB - dateA;
        });

        setFilteredContracts(sortedFilteredContracts);
        setIsLoading(false);
        setCurrentPage(1);
    };

    const months = [
        { value: '1', label: 'Janeiro' },
        { value: '2', label: 'Fevereiro' },
        { value: '3', label: 'Março' },
        { value: '4', label: 'Abril' },
        { value: '5', label: 'Maio' },
        { value: '6', label: 'Junho' },
        { value: '7', label: 'Julho' },
        { value: '8', label: 'Agosto' },
        { value: '9', label: 'Setembro' },
        { value: '10', label: 'Outubro' },
        { value: '11', label: 'Novembro' },
        { value: '12', label: 'Dezembro' },
    ];

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('pt-PT', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    const totalPages = Math.ceil(filteredContracts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentContracts = filteredContracts.slice(startIndex, startIndex + itemsPerPage);

    const changePage = (page: number) => {
        if (page > 0 && page <= totalPages) {
            isPaginationAction.current = true;
            setCurrentPage(page);
        }
    };

    const paginate = (pageNumber: number) => {
        isPaginationAction.current = true;
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        if (isPaginationAction.current) {
            resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            isPaginationAction.current = false;
        }
    }, [currentPage]);

    return (
        <div className="w-full mx-auto" ref={resultsRef}>
            <div className="w-full">

                {/* Filtros */}
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-end gap-6 mb-8 p-4 lg:p-0">
                    <div className="w-full max-w-60">
                        <label htmlFor="year" className="block text-xs font-medium text-primary px-4">Ano</label>
                        <Select value={selectedYear} onValueChange={setSelectedYear}>
                            <SelectTrigger className="w-full font-semibold border-transparent border-b-2 border-b-primary rounded-none focus:border-none">
                                <SelectValue placeholder="Selecione o ano" />
                            </SelectTrigger>
                            <SelectContent className='bg-white text-default border-none'>
                                {years.map(year => (
                                    <SelectItem key={`year-${year}`} value={year.toString()}>
                                        {year}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-full max-w-60">
                        <label htmlFor="year" className="block text-xs font-medium text-primary px-4">Mês</label>
                        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                            <SelectTrigger className="w-full font-semibold border-transparent border-b-2 border-b-primary rounded-none focus:border-none">
                                <SelectValue placeholder="Selecione o mês" />
                            </SelectTrigger>
                            <SelectContent className='bg-white text-default border-none'>
                                <SelectItem key="all-months" value="all">Selecione o mês</SelectItem>
                                {months.map(month => (
                                    <SelectItem key={`month-${month.value}`} value={month.value}>
                                        {month.label}
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

                {isLoading && (
                    <div className="flex justify-center items-center space-x-2 mb-4">
                        <Loader className="animate-spin w-6 h-6 text-primary" />
                        <span className="text-primary font-semibold">Carregando...</span>
                    </div>
                )}

                {/* Exibição dos contratos filtrados */}
                <div className="space-y-4 p-4 lg:p-0">
                    {currentContracts.length > 0 ? (
                        currentContracts.map(contract => (
                            <div key={contract.id} className="border-b border-primary py-4">
                                <div className="flex justify-between items-start">
                                    <div className='w-full flex flex-col sm:flex-row justify-between items-start gap-6'>
                                        <div className='w-full sm:w-2/5 p-0.5'>
                                            <span className="block text-xs font-medium text-primary">Entidade</span>
                                            <h3 className="font-semibold uppercase">{contract.entity}</h3>
                                        </div>

                                        <div className='w-full sm:w-1/5 p-0.5'>
                                            <span className="block text-xs font-medium text-primary">Objecto do Contrato</span>
                                            <p className="text-sm text-default font-semibold">{contract.contractObject}</p>
                                        </div>

                                        <div className='w-full sm:w-1/5 p-0.5'>
                                            <span className="block text-xs font-medium text-primary">Data</span>
                                            <p className="text-sm text-default font-semibold">{formatDate(contract.date)}</p>
                                        </div>

                                        <div className='w-full sm:w-1/5 p-0.5'>
                                            <span className="block text-xs font-medium text-primary">Valor</span>
                                            <p className="font-semibold text-default">
                                                {formatCurrency(contract.value)}
                                            </p>
                                        </div>

                                        <div className='w-full sm:w-1/5 p-0.5 sm:flex-center flex-col'>
                                            <button
                                                onClick={() => toggleExpand(contract.id)}
                                                className={`flex items-center text-sm text-center w-32 px-6 py-2 rounded-xl cursor-pointer ${expandedItem === contract.id ? 'text-primary bg-transparent border-primary border' : 'text-white bg-primary border border-transparent'}`}
                                            >
                                                {expandedItem === contract.id ? (
                                                    <span className='w-full text-center'>Ver menos</span>
                                                ) : (
                                                    <span className='w-full text-center'>Ver mais</span>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {contract.details && expandedItem === contract.id && (
                                    <div className="mt-4 text-sm">
                                        <p className='text-default text-md'>{contract.details}</p>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-center py-8 text-gray-500">Nenhum contrato encontrado para os filtros selecionados.</p>
                    )}
                </div>

                {/* Paginação */}
                <div className="w-full flex justify-center sm:justify-end items-center mt-6 gap-1">
                    {contractsData.length > itemsPerPage && (
                        <div className="mt-8 flex items-center gap-2">
                            {totalPages >= 3 && (
                                <div className="w-full hidden sm:flex justify-end items-center gap-2">
                                    <button
                                        onClick={() => changePage(1)}
                                        disabled={currentPage === 1}
                                        className="flex items-center justify-center p-2 rounded-md bg-transparent border-transparent cursor-pointer disabled:opacity-50"
                                    >
                                        <HiChevronDoubleLeft className="w-5 h-5 text-primary" />
                                    </button>

                                    <button
                                        onClick={() => changePage(currentPage - 1)}
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
                                onPageChange={paginate}
                                pageRangeDisplayed={2}
                                siblingCount={2}
                            />

                            {totalPages >= 3 && (
                                <div className="w-full hidden sm:flex items-center gap-2">
                                    <button
                                        onClick={() => changePage(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="flex items-center justify-center p-2 rounded-md bg-transparent border-transparent cursor-pointer disabled:opacity-50"
                                    >
                                        <ChevronRight className="w-5 h-5 text-primary" />
                                    </button>

                                    <button
                                        onClick={() => changePage(totalPages)}
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
    );
}
