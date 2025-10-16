'use client';

import { homePageContent } from '@/lib/constants';
import BlockHeader3 from '@/components/reusable/BlockHeader3';
import CustomLink from '@/components/reusable/CustomLink';
import { ArrowUpRight } from 'lucide-react';
import CardsSlider from './FeaturedCard';

const SectionBenefits = () => {
  const benefitsSection = homePageContent?.benefitsSection?.[0];
  const featureCardsData = homePageContent?.featureCards;

  const label = benefitsSection?.label || '';
  const heading = benefitsSection?.heading || '';

  const linkAssociado = "/associados";
  const linkSimulacao = "/contactos";

  return (
    <section className="relative overflow-hidden w-full max-w-container bg-white py-20 lg:py-36">
      <div className="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center mx-auto p-4">
        <div className="w-full space-y-8">
          <BlockHeader3
            label={label}
            heading={heading}
            dashColor="bg-black"
            labelColor="text-default"
            headingColor="text-default"
          />

          <div className="max-w-screen-sm p-4 flex flex-col sm:flex-row gap-6">
            <CustomLink
              href={linkAssociado}
              icon={<ArrowUpRight size={18} />}
              iconPosition="right"
              backgroundColor="bg-transparent hover:bg-black/90"
              textColor="text-default hover:text-white"
              borderColor="border-black"
              rounded="rounded-full"
            >
              Torne-se Associado
            </CustomLink>

            <CustomLink
              href={linkSimulacao}
              icon={<ArrowUpRight size={18} />}
              iconPosition="right"
              backgroundColor="bg-primary hover:bg-white"
              textColor="text-white hover:text-primary"
              borderColor="border-primary"
              rounded="rounded-full"
            >
              Peça já sua simulação
            </CustomLink>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center mx-auto p-4 mt-8">
        <CardsSlider cards={featureCardsData} />
      </div>
    </section>
  );
}

export default SectionBenefits;
