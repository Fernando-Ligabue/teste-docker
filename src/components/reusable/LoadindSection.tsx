import { Loader2 } from 'lucide-react'
import React from 'react'

const LoadindSection = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-hover-blue">
            <Loader2 size={48} className="text-primary animate-spin" />
        </div>
    )
}

export default LoadindSection