import { contactsPageContent } from '@/lib/constants';
import BlockHeader1 from '@/components/reusable/BlockHeader1';
import Image from 'next/image';

const ContactosHero = () => {
    const contactsHero = contactsPageContent[0]?.content[0]?.heroContent[0];
    const contactsList = contactsPageContent[0]?.contactList;

    return (
        <section className="min-h-dvh w-full flex flex-col justify-end lg:justify-center items-center relative">
            <div className="absolute top-0 left-0 w-full h-full z-0 bg-hover-blue">
            </div>

            <div className="w-full max-w-container flex justify-between items-center pt-56 sm:pt-32 pb-8 relative">
                <div className='w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center items-end sm:items-center gap-8 p-4'>
                    <div className="w-full">
                        <BlockHeader1
                            label={contactsHero.label}
                            heading={contactsHero.heading}
                            headingSize="text-2xl sm:text-4xl"
                        />
                        <div className='grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-4 p-4'>
                            {
                                contactsList.map((item) => (
                                    <div key={item.id} className='space-y-2 my-2 sm:mt-6 min-h-20'>
                                        <small className='block text-xs text-primary font-medium'>{item.label}</small>
                                        <h4 className='text-white text-sm font-semibold'>{item.title}</h4>
                                        {item.description && <p className='block text-xs text-white font-medium'>{item.description}</p>}
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div className="w-1/2 flex justify-end lg:justify-start">
                        <Image
                            width={450}
                            height={700}
                            alt="CPME - Caixa de Previdência do Ministério da Educação"
                            src={contactsHero.logo}
                            className="w-full max-w-96 h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactosHero;
