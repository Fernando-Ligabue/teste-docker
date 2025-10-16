import { arrendamentoPageContent } from '@/lib/constants';
import React from 'react'
import MapArrendamento from './MapArrendamento';

const SectionProperties = () => {
    const infoText = arrendamentoPageContent?.[0]?.infoText[0];
    const rules = arrendamentoPageContent?.[0]?.rules;
    const locations = arrendamentoPageContent?.[0]?.propertiesArrendamento;

    const residencial = locations.filter(location => location.segment === "Habitacional");
    const comercial = locations.filter(location => location.segment === "Comercial");

    return (
        <>
            <section className="relative w-full max-w-container py-20">
                <div className="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center md:gap-14 mx-auto p-4">
                    <div className='max-w-screen-xl flex flex-col justify-start items-start p-4 py-14'>
                        <div className='w-full flex flex-col justify-start items-start space-y-8 pb-14'>
                            <img
                                src={infoText.icon}
                                alt='Empréstimos CPME'
                                className='w-full max-w-16'
                            />

                            <h4 className='w-full font-semibold text-xl sm:text-3xl text-primary-active'>{infoText.title}</h4>
                        </div>

                    </div>
                </div>
            </section>
            <section className="relative w-full max-w-container min-h-48 py-20 bg-primary">
                <div className="sm:absolute w-full max-w-full z-100 -top-28 flex-center flex-col sm:flex-row gap-8 md:gap-14 mx-auto p-4">
                    {
                        residencial.length > 0 && (
                            <div className='bg-white w-full max-w-96 min min-h-52 py-6 rounded-sm shadow-md border border-zinc-200'>
                                <p className='flex items-center gap-2 text-primary text-xs font-semibold'> <span className='block w-6 h-0.5 bg-primary'></span> ARRENDAMENTO HABITACIONAL</p>
                                <div className='flex justify-between items-center p-4'>
                                    <h4 className='font-medium text-2xl text-primary'>Andares <br /> <strong>disponíveis</strong></h4>
                                    <div className="relative w-20 max-w-16 h-20 max-h-16 select-none pointer-events-none flex-center">
                                        <img
                                            className="w-full"
                                            src="/CPME/assets/images/globals/badge.svg"
                                            alt="Residenciais" />
                                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-bold">
                                            {residencial.length}
                                        </p>
                                    </div>
                                </div>
                                <div className='px-4 w-max'>
                                    <a href={rules} target='_blank' className='block py-1.5 px-3 text-sm text-white bg-primary rounded-full'>Regras</a>
                                </div>
                            </div>
                        )
                    }

                    {
                        comercial.length > 0 && (
                            <div className='bg-white w-full max-w-96 min min-h-52 py-6 rounded-sm shadow-md border border-zinc-200'>
                                <p className='flex items-center gap-2 text-primary-active text-xs font-semibold'> <span className='block w-6 h-0.5 bg-primary-active'></span> ARRENDAMENTO COMERCIAL</p>
                                <div className='flex justify-between items-center p-4'>
                                    <h4 className='font-medium text-2xl text-primary-active'>Andares <br /> <strong>disponíveis</strong></h4>
                                    <div className="relative w-20 max-w-16 h-20 max-h-16 select-none pointer-events-none flex-center">
                                        <img
                                            className="w-full"
                                            src="/CPME/assets/images/globals/badge-darkBlue.svg"
                                            alt="Comerciais" />
                                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-bold">
                                            {comercial.length}
                                        </p>
                                    </div>
                                </div>
                                <div className='px-4 w-max'>
                                    {/* <span className='block py-1.5 px-3 text-sm text-white bg-primary-active rounded-full'>Regras</span> */}
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
            <section className='w-full'>
                <MapArrendamento locations={locations} />
            </section>
        </>
    )
}

export default SectionProperties;
