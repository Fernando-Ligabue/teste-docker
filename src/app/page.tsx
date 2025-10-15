import { getStrapiDataAbout, getStrapiDataHome } from "@/lib/actions";

export default async function Home() {
  const strapiDataHomeContent = await getStrapiDataHome("api/home-page");
  console.log(strapiDataHomeContent);
  const strapiDataAboutContent = await getStrapiDataAbout("api/about");

  const { title, description } = strapiDataHomeContent.data;
  const { titleAbout, descriptionAbout } = strapiDataAboutContent.data;

  // const imageUrl = homebg?.url ? `${baseUrl}${homebg.url}` : null;

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen pb-20 gap-16">
      <main className="flex flex-col gap-32">
        <section
          className="w-full min-h-[75vh] flex flex-col items-center justify-center gap-8 bg-cyan-200">
          <h1 className="text-5xl text-black">{title}</h1>
          <p className="text-5xl text-white">{description}</p>
                    <p className="text-2xl text-black">Alteração accesstoken</p>

        </section>

        <section className="w-full h-screen flex flex-col items-center justify-center gap-8">
          <h1 className="text-5xl text-black">{titleAbout}</h1>
          <p className="text-5xl text-slate-600">{descriptionAbout}</p>
        </section>
      </main>
    </div>
  );
}
