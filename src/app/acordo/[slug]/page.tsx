import React from 'react';
import { acordosPageContent } from '@/lib/constants';
import HeroAcordo from './_components/AcordoHero';
import EntidadesFilter from './_components/EntidadesFilter';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return [
    { slug: 'apoio-domiciliario' },
    { slug: 'lazer' },
    { slug: 'residencias-senior' },
    { slug: 'saude' },
    { slug: 'outros-acordos' },
  ];
}

export const metadata: Metadata = {
  title: 'Acordos | CPME',
  description: 'Conheça as parcerias e acordos com excelenetes vantagens para os associados CPME',
  keywords: ['CPME', 'acordos', 'parcerias', 'vantagens', 'associados', 'entidades'],
  openGraph: {
    title: 'Acordos | CPME',
    description: 'Consulte aqui as parcerias e acordos com excelenetes vantagens para os associados CPME',
    url: '',
    images: [
      {
        url: 'https://www.seusite.pt/imagens/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'CPME'
      }
    ],
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.seusite.pt/politica-de-privacidade'
  }
}


export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const validSlugs = [
    'apoio-domiciliario',
    'lazer',
    'residencias-senior',
    'saude',
    'outros-acordos',
  ];

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const content = acordosPageContent[0].contentPages[slug];

  if (!content) {
    notFound();
  }

  return (
    <>
      <HeroAcordo slug={slug} />
      <EntidadesFilter entidades={content.entidades ?? []} />
    </>
  );
}
