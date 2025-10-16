import Link from 'next/link';
import React from 'react';

interface CardEmprestimoProps {
    imageUrl: string;
    title: string;
    link: string;
}

const CardEmprestimo: React.FC<CardEmprestimoProps> = ({ imageUrl, title, link }) => {
    return (
        <Link href={link} className="relative group">
            <div className="relative overflow-hidden">
                <img className="rounded-sm transition-transform duration-300 group-hover:scale-105" src={imageUrl} alt={title} />
                <div className="absolute inset-0 bg-zinc-800/20 opacity-100"></div>
                <div className="absolute inset-0 bg-hover-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className='absolute flex flex-col justify-end w-full max-w-60 min-h-20 p-4 bottom-6 left-0'>
                    <h3 className='text-white text-2xl font-medium'>{title}</h3>
                </div>
            </div>

        </Link>
    );
}

export default CardEmprestimo;
