'use client'

import { useState } from 'react'
import SearchModal from '../reusable/SearchModal'
import { Search } from 'lucide-react'
export default function SearchButton() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Search
                className="w-5 h-5 text-white cursor-pointer"
                onClick={() => setOpen(true)}
            />
            <SearchModal isOpen={open} onClose={() => setOpen(false)} />
        </>
    )
}
