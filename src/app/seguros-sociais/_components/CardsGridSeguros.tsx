import React from 'react';
import Link from 'next/link';
import { Users } from 'lucide-react';

interface Insurance {
    id: number;
    imageUrl: string;
    title: string;
    size: string;
    link: string;
}

interface InsuranceProps {
    cards: Insurance[];
    infoCard?: {
        icon?: React.ReactNode | string;
        title: string;
    };
}

const InsuranceComponent: React.FC<InsuranceProps> = ({ cards, infoCard }) => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 auto-rows-max">
                {infoCard && (
                    <div className="relative p-6 flex flex-col justify-center">
                        <div className="flex items-start flex-col gap-14">
                            <div className="flex-shrink-0">
                                <div className="w-full h-auto flex items-center justify-center">
                                    {infoCard.icon || <Users className="w-6 h-6 text-terciary" />}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-seguros text-2xl font-bold leading-tight mb-2">
                                    {infoCard.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                )}

                {/* Cards dos seguros */}
                {cards.map((insurance, index) => {
                    const getCardClasses = (size: string, index: number) => {
                        const baseClasses = "relative overflow-hidden rounded-sm group cursor-pointer";

                        const adjustedIndex = infoCard ? index + 1 : index;

                        switch (size) {
                            case 'lg':
                                if (adjustedIndex === 1) {
                                    return `${baseClasses} min-h-[555px]`;
                                } else {
                                    return `${baseClasses} min-h-[555px]`;
                                }
                            case 'md':
                                return `${baseClasses} min-h-[525px] max-h-[525px]`;
                            case 'sm':
                                return `${baseClasses} min-h-[505px] max-h-[505px]`;
                            default:
                                return `${baseClasses} min-h-[555px] max-h-[555px]`;
                        }
                    };

                    return (
                        <Link
                            key={insurance.id}
                            href={`seguro-social/${insurance.link}`}
                            className={getCardClasses(insurance.size, index)}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105 my-auto"
                                style={{
                                    backgroundImage: `url(${insurance.imageUrl})`,
                                }}
                            />

                            <div className="absolute inset-0" />

                            <div className="absolute inset-0 bg-hover-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="absolute bottom-8 left-0 right-0 p-4">
                                <h3 className="text-white font-medium text-lg leading-tight group-hover:text-white transition-colors duration-300">
                                    {insurance.title}
                                </h3>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default InsuranceComponent;