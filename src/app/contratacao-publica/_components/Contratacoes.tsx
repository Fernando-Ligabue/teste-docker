import React from 'react'
import { ContractsFilter } from './ContractsFilter'

const Contratacoes = () => {
  return (
    <section className='relative overflow-hidden w-full max-w-container bg-bg-section py-20'>
      <div className='max-w-screen-xl flex flex-col justify-between items-start mx-auto p-4 space-y-8'>
          <h2 className='text-primary text-2xl sm:text-3xl font-semibold'>Filtrar Contratação</h2>
          <ContractsFilter />
      </div>
    </section>

  )
}

export default Contratacoes