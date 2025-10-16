'use client'

import { homePageContent } from '@/lib/constants'
import BlockHeader2 from '@/components/reusable/BlockHeader2';
import CustomLink from '@/components/reusable/CustomLink';
import { ArrowUpRight } from 'lucide-react';
import LogoAnimate from './LogoAnimate';

const LogoOverflow = () => {
  const sectionContent = homePageContent?.featureSection?.[0];

  const label = sectionContent?.label || '';
  const heading = sectionContent?.heading || '';
  const descriptionText1 = sectionContent?.descriptionText || '';
  const descriptionText2 = sectionContent?.descriptionText2 || '';

 
  return (
    <section className="relative overflow-hidden w-full max-w-container bg-bg-section py-20 lg:py-36">
      <div className="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center mx-auto p-4">
        <div className="w-full space-y-8">
          <BlockHeader2
            label={label}
            heading={heading}
            dashColor="bg-black"
            labelColor="text-default"
            headingColor="text-default"
          />

          <div className="max-w-screen-sm space-y-8">
            <p className="text-default text-base font-medium">{descriptionText1}</p>
            <p className="text-default text-base font-medium">{descriptionText2}</p>
          </div>

          <CustomLink
            href="/historia"
            icon={<ArrowUpRight size={18} />}
            iconPosition="right"
            backgroundColor="bg-transparent hover:bg-black/90"
            textColor="text-default hover:text-white"
            borderColor="border-black"
            rounded="rounded-full"
          >
            Ler Mais
          </CustomLink>
        </div>

        <div className="sm:w-1/2">
          <div className="relative xl:absolute top-14 -right-32 object-cover w-auto h-full py-14">
            <LogoAnimate />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoOverflow;
