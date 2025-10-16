import React from 'react'
import PatrimonioHero from './_components/PatrimonioHero'
import SectionPatrimonio from './_components/SectionPatrimonio'
import Properties from './_components/Properties'
import { patrimonioPageContent } from '@/lib/constants'

const Patrimonio = () => {
    return (
        <>
            <PatrimonioHero />
            <SectionPatrimonio />
            <Properties />
        </>
    )
}

export default Patrimonio