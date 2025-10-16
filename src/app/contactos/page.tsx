import React from 'react'
import FormContact from './_components/FormContact'
import ContactosHero from './_components/ContactosHero'
import MapContacts from './_components/MapContacts'

const page = () => {
  return (
    <>
    <ContactosHero />
    <MapContacts />
    <FormContact />
    </>
  )
}

export default page