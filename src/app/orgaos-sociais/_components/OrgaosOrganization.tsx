"use client";

import { orgaosSociaisPageContent } from '@/lib/constants';
import React from 'react';

export interface Membro {
    nome: string;
    cargo?: string;
    numeroSocio?: string;
}

export interface LinhaOrgao {
    celulas: (Membro | Membro[] | null)[];
}

export interface OrgaoSocial {
    titulo: string;
    estrutura: {
        cabecalho: string[];
        linhas: LinhaOrgao[];
    };
}

const OrgaosOrganization = () => {
    const orgaos = orgaosSociaisPageContent?.[0]?.orgaos ?? [];

    return (
        <section className='w-full bg-bg-section pt-10 px-8'>
            <div className="max-w-screen-xl mx-auto space-y-14 px-4 pt-4 pb-0">
                <h2 className='text-primary font-medium text-4xl'>Órgãos Sociais em Exercício</h2>

                {orgaos.map((orgao, orgaoIndex) => (
                    <div
                        key={orgaoIndex}
                        className='flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-20'
                    >
                        <div className='w-full lg:w-1/4'>
                            <h3 className="mb-4 text-default font-medium text-2xl">{orgao.titulo}</h3>
                        </div>

                        {orgao.estrutura.linhas.map((linha, linhaIndex) => (
                            <div
                                key={linhaIndex}
                                className='w-full md:w-1/2 max-w-[700px] flex flex-col md:flex-row justify-center items-start pb-8 border-b border-black'
                            >
                                {linha.celulas.map((celula, celIndex) => {
                                    const cabecalho = orgao.estrutura.cabecalho[celIndex];

                                    const membros: Membro[] = Array.isArray(celula)
                                        ? celula
                                        : celula
                                            ? [celula]
                                            : [];

                                    return (
                                        <div
                                            key={celIndex}
                                            className='flex-1 w-full min-w-52 lg:px-4'
                                        >
                                            <p className="text-primary text-left font-semibold text-xs mb-4 w-full">
                                                {cabecalho}
                                            </p>
                                            {membros.length === 0 ? (
                                                <p className="font-semibold">Sem membros</p>
                                            ) : (
                                                membros.map((membro, membroIndex) => (
                                                    <div
                                                        key={membroIndex}
                                                        className='w-full mb-0.5 p-0.5'
                                                    >
                                                        <p className="font-semibold text-left text-sm">{membro.nome}</p>
                                                        {membro.cargo && (
                                                            <div className="text-xs font-medium">{membro.cargo}</div>
                                                        )}
                                                        {membro.numeroSocio && (
                                                            <div className="text-xs text-zinc-600">
                                                                {membro.numeroSocio}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OrgaosOrganization;
