'use client'

import { Search } from 'lucide-react'
import { NavigationMenu } from './NavigationMenu'
import { logoCpme } from '@/lib/constants'
import Link from 'next/link'
import Image from 'next/image'
import SearchButton from './SearchButton'
const Header = () => {
    return (
        <header className='absolute w-full z-10'>
            <div className='w-full mx-auto flex-center flex-col sm:flex-row text-center gap-2 bg-white p-1'>
                <p className='text-sm font-medium text-default'>Peça Já A Sua Simulação!</p>
                <Link href="/contactos" className='text-primary text-sm'>Entre Em Contacto Connosco</Link>
            </div>
            <div className='container mx-auto flex flex-col sm:flex-row gap-6 justify-between items-center p-2 lg:py-8 lg:px-4'>
                <div className='w-fit mr-auto'>
                    <Link href="/">
                        <Image className="w-auto h-auto min-w-44 max-w-44 "
                            width={155}
                            height={60}
                            src={logoCpme} 
                            priority
                            alt="CPME - Caixa de Previdência do Ministério da Educação" />
                    </Link>
                </div>
                <div className="relative w-full flex justify-between sm:justify-center lg:justify-end items-center gap-6 px-2">
                    <Link href="/associados" className='bg-primary text-white text-sm px-2 py-2 rounded-full min-w-40 text-center'>Torne-se Associado</Link>
                    <NavigationMenu />
                    {/* <Search size={28} className='text-white cursor-pointer'
                        onClick={() => alert("Abre a busca global")}
                    /> */}
                    <SearchButton />
                </div>
            </div>
        </header>
    )
}

export default Header