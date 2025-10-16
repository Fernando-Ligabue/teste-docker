import React from 'react'
import HeroAssociates from './_components/HeroAssociates'
import { asscociatePageContent } from '@/lib/constants'
import SectionCpme from './_components/SectionCpme'
import SectionBlue from './_components/SectionBlue'
import SectionBenefits from './_components/SectionBenefits'
import LoadindSection from '@/components/reusable/LoadindSection'

const Associadospage = () => {
    const heroData = asscociatePageContent?.[0]?.content?.[0]?.heroContent?.[0];

    if (!heroData) {
        return (
            <LoadindSection />
        );
    }

    return (
        <>
            <HeroAssociates />
            {/* Seção CPME */}
            <SectionCpme />
            {/* Seção blue */}
            <SectionBlue />
            {/* Seção Beneficios */}
            <SectionBenefits />
        </>
    );
}

export default Associadospage;
