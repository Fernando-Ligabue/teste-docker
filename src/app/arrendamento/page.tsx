import React from 'react'
import HeroArrendamento from './_components/HeroArrendamento'
import SectionArrendamento from './_components/SectionArrendamento'
import AdvantageList from './_components/AdvantageList'
import SectionProperties from './_components/SectionProperties'

const ArrendamentoPage = () => {
  return (
    <>
        <HeroArrendamento />
        <SectionArrendamento />
        <AdvantageList />
        <SectionProperties />
    </>
  )
}

export default ArrendamentoPage