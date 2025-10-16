'use client'

import { useState, useEffect } from 'react'
import { searchIndex } from '@/lib/constants'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function SearchModal({
    isOpen,
    onClose,
}: {
    isOpen: boolean
    onClose: () => void
}) {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<typeof searchIndex>([])

    useEffect(() => {
        if (!isOpen) {
            setQuery('')
            setResults([])
        }
    }, [isOpen])

    const normalize = (str: string) =>
        str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

    const handleSearch = (value: string) => {
        setQuery(value)

        if (value.length < 2) {
            setResults([])
            return
        }

        const lowerParts = normalize(value).split(/\s+/)

        const matched = searchIndex.filter(item =>
            lowerParts.every(part =>
                item.keywords.some(keyword =>
                    normalize(keyword).includes(part)
                )
            )
        )

        setResults(matched)
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-100 bg-hover-blue flex items-start justify-center pt-20 px-4">
            <div className="bg-white/90 w-full max-w-screen-xl min-h-36 h-auto flex flex-col rounded-lg shadow-lg p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-default hover:text-gray-700"
                >
                    <X className="w-5 h-5 cursor-pointer" />
                </button>
                <input
                    type="text"
                    placeholder="Digite o conteúdo que procura..."
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full mt-8 px-4 py-2 border-1 border-primary rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {results.length > 0 && (
                    <ul className="mt-4 space-y-4 max-h-80 overflow-y-auto p-6">
                        {results.map((result, i) => (
                            <li key={i} className="border-b pb-3">
                                <Link
                                    href={result.url}
                                    className="block rounded-md p-2 transition"
                                    onClick={onClose}
                                >
                                    <h3 className="text-lg font-semibold text-primary">
                                        {result.title}
                                    </h3>
                                    <p className="text-sm text-primary mt-1">Ver conteúdo.</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}

                {query.length > 1 && results.length === 0 && (
                    <p className="text-center text-gray-500 mt-4">
                        Nenhum resultado encontrado.
                    </p>
                )}
            </div>
        </div>
    )
}
