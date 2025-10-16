import React from 'react'
import EditalsList from './EditalsList'

const Editals = () => {
  return (
    <section className='relative overflow-hidden w-full max-w-container bg-bg-section py-20'>
          <div className='max-w-screen-xl flex flex-col justify-between items-start mx-auto p-4 space-y-8'>
              <EditalsList />
          </div>
        </section>
  )
}

export default Editals