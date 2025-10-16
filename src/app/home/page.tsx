import React from 'react'
import HeroHome from './_components/HeroHome'
import BlockHeader3 from '@/components/reusable/BlockHeader3'

import CustomLink from '@/components/reusable/CustomLink'
import { ArrowUpRight } from 'lucide-react'
import CardsSlider from './_components/FeaturedCard'


import LogoOverflow from './_components/LogoOverflow'
import SectionBenefits from './_components/SectionBenefits'
import SectionMarquee from './_components/SectionMarquee'
import EmprestimosSection from './_components/EmprestimosSection'
import ArrendamentoSection from './_components/ArrendamentoSection'
import TestimonialsHome from './_components/TestimonialsHome'

const HomePage = () => {
  return (
    <>
      <HeroHome />
      <LogoOverflow />
      <SectionBenefits />
      <SectionMarquee />
      <EmprestimosSection />
      <ArrendamentoSection />
      <TestimonialsHome />
    </>
  )
}

export default HomePage