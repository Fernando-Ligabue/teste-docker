import React from 'react'
import HeroPrivacyPolice from './_componentes/HeroPrivacyPolice'
import SectionPolicies from './_componentes/SectionPolicies'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | CPME',
  description: 'Conheça a política de privacidade da CPME e como tratamos os seus dados pessoais.',
  keywords: ['CPME', 'política de privacidade', 'dados pessoais', 'RGPD'],
  openGraph: {
    title: 'Política de Privacidade | CPME',
    description: 'Consulte aqui a nossa Política de Privacidade.',
    url: 'https://www.seusite.pt/politica-de-privacidade',
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

const PoliticaPrivacidade = () => {
    return (
        <>
            <HeroPrivacyPolice />
            <SectionPolicies />
        </>
    )
}

export default PoliticaPrivacidade