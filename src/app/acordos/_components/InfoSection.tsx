import { acordosPageContent } from '@/lib/constants';
import Link from 'next/link';
import React from 'react'

const InfoSection = () => {
    const infoData = acordosPageContent[0]?.infoSection;
    return (
        <section className='mx-auto min-h-80 py-14 bg-hover-green'>
        <div className='mx-auto max-w-screen-xl min-h-80 py-14'>
            {infoData?.map((item, index) => (
                <div key={index} className='w-full flex flex-col justify-center items-center gap-4 px-4'>
                    <h3 className='text-2xl text-center text-default font-semibold'>{item.heading}</h3>
                    <p className='text-xl text-center text-default font-medium'>{item.descriptionText}</p>
                    <div className='w-full flex flex-col sm:flex-row gap-4 justify-around items-center mt-8'>
                        {item.phone && <a href="tel:+351213243810" className='w-full px-8 py-1 bg-white rounded-md text-xl text-terciary text-center'>Telefone: <br /> {item.phone}</a>}
                        {item.email && <a href="mailto:cpme@cpme.pt" className='w-full px-8 py-1 bg-white rounded-md text-xl text-terciary text-center'>Email: <br />{item.email}</a>}
                        {item.linkContact && <Link href={item.linkContact} className='w-full text-xl text-center text-white px-8 py-1 bg-terciary rounded-md'>Formulário <br/> de contacto</Link>}
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
}

export default InfoSection