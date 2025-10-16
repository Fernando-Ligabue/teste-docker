"use client"

import React, { useEffect } from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
    pageRangeDisplayed?: number;
    siblingCount?: number;
}

const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    pageRangeDisplayed = 5,
    siblingCount = 1,
}: PaginationProps) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const startPage = Math.max(currentPage - siblingCount, 1);
    const endPage = Math.min(currentPage + siblingCount, totalPages);

    const visiblePages = pages.slice(startPage - 1, endPage);

    useEffect(() => {
        window.history.pushState({}, '', `?page=${currentPage}`);
    }, [currentPage]);

    return (
        <div className="w-full min-w-fit mx-auto flex justify-end items-center gap-6 px-2 overflow-x-auto scrollbar-none">
            {visiblePages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`min-w-4 px-1 py-2 rounded-lg  cursor-pointer ${page === currentPage ? 'text-primary font-bold' : 'text-zinc-600'}`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
