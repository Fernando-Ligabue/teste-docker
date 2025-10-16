import { organogramaPageContent } from '@/lib/constants';
import BlockHeader1 from '@/components/reusable/BlockHeader1';
import Image from 'next/image';

const HeroOrganograma = () => {
    const heroData = organogramaPageContent[0]?.content[0]?.heroContent[0];

    return (
        <section className="min-h-[80dvh] sm:min-h-dvh w-full flex flex-col justify-end lg:justify-center items-center relative">

            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image
                    src={heroData.background}
                    alt="Banner"
                    fill
                    style={{ objectFit: 'cover', objectPosition: '80% center' }}
                    loading="lazy"
                    className='w-auto h-full'
                />
            </div>
            <div className="absolute inset-0 bg-black opacity-10"></div>

            <div className="w-full lg:w-2/3 max-w-container flex justify-between items-center mt-24 pb-8 relative">
                <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-center items-end sm:items-center gap-8 p-4">
                    <div className="w-full">
                        <BlockHeader1
                            label={heroData.label}
                            heading={heroData.heading}
                            complementText={heroData.descriptionText}
                            headingSize="text-2xl sm:text-4xl"
                        />
                    </div>
                    <div className="w-1/2 flex justify-end" >
                        <Image
                            width={60}
                            height={60}
                            alt="CPME - Caixa de Previdência do Ministério da Educação"
                            src={heroData.logo}
                            className="w-full max-w-16 h-full max-h-16"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroOrganograma;
