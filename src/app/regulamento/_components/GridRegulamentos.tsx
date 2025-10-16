"use client"

import { regulamentosContasPageContent } from '@/lib/constants';
import { CgFileDocument } from "react-icons/cg";


const GridRegulamentos = () => {
    const estaturatioTitle = regulamentosContasPageContent?.[0]?.estatutarioTitle;
    const estatuto = regulamentosContasPageContent?.[0]?.sectionRegEstatutario;

    const emprestimosTitle = regulamentosContasPageContent?.[0]?.emprestimosTitle;
    const emprestimo = regulamentosContasPageContent?.[0]?.sectionRegEmprestimos;

    const segurosTitle = regulamentosContasPageContent?.[0]?.segurosTitle;
    const seguro = regulamentosContasPageContent?.[0]?.sectionRegSeguros;


    return (
        <section className="relative overflow-hidden w-full max-w-container py-20 lg:py-28 space-y-14">
            {/* ESTATUTO */}
            <div className="max-w-screen-xl flex flex-col justify-between items-center md:gap-6 mx-auto p-4">
                <h2 className='w-full text-left text-primary text-3xl font-semibold'>{estaturatioTitle}</h2>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                    {estatuto.map((item, index) => (
                        <div key={index} className='min-h-64 flex flex-col justify-between items-start border-2 border-primary rounded-sm px-4 py-8 sm:p-8'>
                            <div>
                                <p className='text-default text-2xl font-semibold'>{item.title}</p>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <p className=' w-full font-normal text-sm text-primary'>{item.date}</p>
                                <a href={item.doc} target="_blank" rel="noopener noreferrer" className='w-full flex justify-end items-center gap-2'>
                                    <span className='text-primary text-base font-medium hidden lg:block'>Download</span>
                                    <div className='bg-primary rounded-full p-1'>
                                        <CgFileDocument size={24} className="text-white" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* EMPRESTIMOS */}
            <div className="max-w-screen-xl flex flex-col justify-between items-center md:gap-6 mx-auto p-4">
                <h3 className='w-full text-left text-primary text-3xl font-semibold'>{emprestimosTitle}</h3>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                    {emprestimo.map((item, index) => (
                        <div key={index} className='min-h-64 flex flex-col justify-between items-start border-2 border-primary rounded-sm p-4 sm:p-8 '>
                            <div>
                                <p className='text-default text-2xl font-semibold'>{item.title}</p>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <p className=' w-full font-normal text-sm text-primary'>{item.date}</p>
                                <a href={item.doc} target="_blank" rel="noopener noreferrer" className='w-full flex justify-end items-center gap-2'>
                                    <span className='text-primary text-base font-medium hidden lg:block'>Download</span>
                                    <div className='bg-primary rounded-full p-1'>
                                        <CgFileDocument size={24} className="text-white" />
                                    </div>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {/* SEGUROS */}
            <div className="max-w-screen-xl flex flex-col justify-between items-center md:gap-6 mx-auto p-4">
                <h3 className='w-full text-left text-primary text-3xl font-semibold'>{segurosTitle}</h3>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                    {seguro.map((item, index) => (
                        <div key={index} className='min-h-64 flex flex-col justify-between items-start border-2 border-primary rounded-sm p-4 sm:p-8 '>
                            <div>
                                <p className='text-default text-2xl font-semibold'>{item.title}</p>
                            </div>
                            <div className='w-full flex justify-between items-center'>
                                <p className=' w-full font-normal text-sm text-primary'>{item.date}</p>
                                <a href={item.doc} target="_blank" rel="noopener noreferrer" className='w-full flex justify-end items-center gap-2'>
                                    <span className='text-primary text-base font-medium hidden lg:block'>Download</span>
                                    <div className='bg-primary rounded-full p-1'>
                                        <CgFileDocument size={24} className="text-white" />
                                    </div>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default GridRegulamentos