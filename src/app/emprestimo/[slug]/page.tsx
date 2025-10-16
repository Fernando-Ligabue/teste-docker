import React from 'react';
import { emprestimosPageContent } from '@/lib/constants';
import HeroEmprestimo from './_components/HeroEmprestimo';
import SectionEmprestimo from './_components/SectionEmprestimo';
import CardsEmprestimo from './_components/CardsEmprestimo';
import SectionRegulamento from './_components/SectionRegulamentos';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { slug: 'bolsas-de-estudo' },
    { slug: 'equipamento-educativo' },
    { slug: 'cuidados-saude' },
    { slug: 'obras-casa-propria' },
    { slug: 'comprar-ou-construir' },
    { slug: 'transferencia-emprestimos' },
    { slug: 'reservas-matematicas' },
    { slug: 'quotas-pagas' },
  ];
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const validSlugs = [
    'bolsas-de-estudo',
    'equipamento-educativo',
    'cuidados-saude',
    'obras-casa-propria',
    'comprar-ou-construir',
    'transferencia-emprestimos',
    'reservas-matematicas',
    'quotas-pagas',
  ];

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const content = emprestimosPageContent[0].contentPages[slug];

  if (!content) {
    notFound();
  }


  return (
    <>
      <HeroEmprestimo slug={slug} />
      <SectionEmprestimo slug={slug} />
      <CardsEmprestimo slug={slug} />
      <SectionRegulamento slug={slug} />
    </>
  );
}
