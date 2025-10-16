import { footerInstitutional, footerContacts, logoFooter, policiesFooter, socialsFooter } from "@/lib/constants"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import type { Social } from "@/lib/types"
import BlockHeader3 from "../reusable/BlockHeader3"

const iconMap: Record<Social["icon"], React.ComponentType<any>> = {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
}

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full p-8 bg-black text-white space-y-14">
      <div className='flex flex-col justify-start items-start gap-2.5 max-w-screen-xl mx-auto'>
        <BlockHeader3
          label="CONTACTOS"
          heading={"Quero ser contactado e saber mais sobre ser associado CPME"}
          dashColor="bg-white"
          labelColor="text-white"
          headingColor="text-primary"
        />
      </div>

      <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row justify-between gap-8">
        {/* Institucional */}
        <div className="flex items-start gap-6 md:gap-14 flex-1 basis-[50%] md:basis-[40%]">
          {footerInstitutional.map((group) => (
            <div key={group.label}>
              <h4 className="font-semibold text-md mb-2">{group.label}</h4>
              <ul className="space-y-1">
                {group.subItems.map((item) => (
                  <li key={item.href} className="border-b border-transparent hover:border-b hover:border-primary">
                    <Link href={item.href} className="text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contactos */}
        <div className="flex-1 basis-[50%] md:basis-[60%] max-w-sm space-y-4">
          {footerContacts.map((item) => (
            <p key={item.label} className="flex flex-col">
              <span className="font-semibold text-base">{item.label}:</span>
              <span className="font-normal text-sm">{item.value}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto p-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center flex-wrap md:flex-nowrap gap-10">
        <div>
          <img
            className="w-full max-w-36"
            src={logoFooter} alt="CPME - Caixa de Previdência do Ministério da Educação" />
        </div>

        <span className="text-xs text-center">Desenvolvido por <a href="https://creative-minds.pt" target="_blank">Creative Minds</a>, {year}</span>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {policiesFooter.map((police, index) => (
            <Link key={index} href={police.href} className="text-xs">{police.label}</Link>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          {socialsFooter.map((social) => {
            const IconComponent = iconMap[social.icon as keyof typeof iconMap]
            if (!IconComponent) return null

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors"
                aria-label={social.label}
              >
                <IconComponent size={28} className="rounded-full border-2 border-white p-1" />
              </a>
            )
          })}
        </div>

      </div>
    </footer>
  )
}

export default Footer
