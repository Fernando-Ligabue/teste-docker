import { editalsPageContent } from '@/lib/constants';
import BlockHeader1 from '@/components/reusable/BlockHeader1';
import Image from 'next/image';

const EditalsHero = () => {
    const editalData = editalsPageContent[0]?.content[0]?.heroContent[0];

    return (
        <section className="min-h-[80dvh] sm:min-h-dvh w-full flex flex-col justify-end lg:justify-center items-center relative">

            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image
                    src={editalData.background}
                    alt="Banner"
                    fill
                    style={{ objectFit: 'cover', objectPosition: '80% center' }}
                    loading="lazy"
                    className='w-auto h-full'
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-15"></div>


            <div className="w-full lg:w-2/3 max-w-container flex justify-between items-center mt-24 pb-8 relative">
                <div className="relative w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-end sm:items-center gap-8 p-4">
                    <div className="w-full lg:w-1/2">
                        <BlockHeader1
                            label={editalData.label}
                            heading={editalData.heading}
                            complementText={editalData.descriptionText}
                            headingSize="text-3xl sm:text-6xl"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-end lg:absolute -top-14 right-4">
                        {editalData.logo && (
                            <Image
                                width={116}
                                height={116}
                                alt="CPME - Caixa de Previdência do Ministério da Educação"
                                src={editalData.logo}
                                className="w-full max-w-28 h-full max-h-28"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditalsHero;
