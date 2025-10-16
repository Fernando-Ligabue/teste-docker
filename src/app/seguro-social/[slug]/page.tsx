import React from 'react';
import { segurosPageContent } from '@/lib/constants';
import HeroSeguroSocial from './_components/HeroSeguroSocial';
import SectionSeguroSocial from './_components/SectionSeguroSocial';
import CardsSeguroSocial from './_components/CardsSeguroSocial';
import SectionRegulamento from './_components/SectionRegulamentos';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { slug: 'seguro-vida-inteira' },
    { slug: 'seguro-reforma' },
    { slug: 'seguro-prosseguimento-estudos' },
    { slug: 'seguro-maioridade' },
    { slug: 'seguro-lazer' },
    { slug: 'capitais-diferidos' },
    { slug: 'capital-repartido' },
    { slug: 'capital-duplo' },
  ];
}


export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

    const validSlugs = [
    'seguro-vida-inteira',
    'seguro-reforma',
    'seguro-prosseguimento-estudos',
    'seguro-maioridade',
    'seguro-lazer',
    'capitais-diferidos',
    'capital-repartido',
    'capital-duplo',
  ];

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const content = segurosPageContent[0].contentPages[slug];

  if (!content) {
    notFound();
  }


  return (
    <>
      <HeroSeguroSocial slug={slug} />
      <SectionSeguroSocial slug={slug}/>
      <CardsSeguroSocial slug={slug}/>
      <SectionRegulamento slug={slug}/>
    </>
  );
}
