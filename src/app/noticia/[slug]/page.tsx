import { notFound } from 'next/navigation';
import { newsPageContent } from '@/lib/constants';
import NoticiaHero from '@/app/noticia/[slug]/_components/NoticiaHero';
import NoticiaContent from './_components/NoticiaContent';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return [
    { slug: 'tomada-de-posse-novos-orgaos' },
    { slug: 'pascoa-2025' },
    { slug: 'assembleia-geral-ordinaria-2025' },
    { slug: 'cpme-redes-sociais' },
    { slug: 'boas-festas-feliz-2025' },
    { slug: 'assembleia-eleitoral-2024' },
    { slug: 'dia-mae-2024' },
    { slug: 'pascoa-2024' },
    { slug: 'assembleia-geral-ordinaria21-03-24' },
    { slug: 'encerramento-carnaval' },
  ];
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const validSlugs = [
    'tomada-de-posse-novos-orgaos',
    'pascoa-2025',
    'assembleia-geral-ordinaria-2025',
    'cpme-redes-sociais',
    'boas-festas-feliz-2025',
    'assembleia-eleitoral-2024',
    'dia-mae-2024',
    'pascoa-2024',
    'assembleia-geral-ordinaria21-03-24',
    'encerramento-carnaval'
  ];

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const contentPageData = newsPageContent[0].contentNoticia[slug as string];

  if (!contentPageData) {
    notFound();
  }

  return (
    <>
      <NoticiaHero slug={slug} />
      <NoticiaContent params={params} />
    </>
  );
}
