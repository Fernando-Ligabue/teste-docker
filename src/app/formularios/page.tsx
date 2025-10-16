import React from 'react'
import FormulariosHero from './_components/FormulariosHero'
import FormulariosFilter from './_components/FormulariosFilters'
import { formulariosPageContent } from '@/lib/constants'

const FormulariosPage = () => {
    const content = formulariosPageContent[0].formsList
    return (
        <>
            <FormulariosHero />
            <FormulariosFilter formulario={content ?? []} />
        </>
    )
}

export default FormulariosPage