import { emprestimosPageContent } from '@/lib/constants';
import React from 'react';

interface CardsEmprestimoProps {
    slug: string;
}

const CardsEmprestimo: React.FC<CardsEmprestimoProps> = ({ slug }) => {
    const contentPageData = emprestimosPageContent[0].contentPages[slug];
    const { sectionCards } = contentPageData;

    if (!contentPageData) {
        return <div>Conteúdo não encontrado para este empréstimo.</div>;
    }


    return (
        <section className="relative overflow-hidden w-full max-w-container bg-bg-section py-20 lg:py-28">
            <div className="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center md:gap-14 mx-auto p-4">
                <div className="w-full max-w-scree-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-8">
                    {Object.entries(sectionCards).map(([key, card], index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-around items-start space-y-4 p-6 rounded-sm shadow-sm border-4 border-emprestimos min-h-72"
                        >
                            <h3 className="text-3xl font-semibold">{card.title}</h3>
                            <p className="text-sm text-default">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardsEmprestimo;
