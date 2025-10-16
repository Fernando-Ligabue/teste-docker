import React from 'react'
import HeroEmprestimos from './_components/HeroEmprestimos'
import SectionCpme from './_components/SectionCpme'
import { emprestimosPageContent } from '@/lib/constants';
import ListSegments from './_components/ListSegments';

const Acordos = () => {
  const emprestimosData = emprestimosPageContent[0]?.cardEmprestimos;
  return (
    <>
      <HeroEmprestimos />
      <SectionCpme />
      <ListSegments segmento="emprestimosApoioFamilia" dados={emprestimosData} />
      <ListSegments segmento="creditoHabitacao" dados={emprestimosData} />
      <ListSegments segmento="reservasMatematicas" dados={emprestimosData} />
    </>
  )
}

export default Acordos