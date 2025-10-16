import { X } from 'lucide-react';
import React from 'react';

interface LocationModalProps {
    location: any;
    onClose: () => void;
}

export default function LocationModal({ location, onClose }: LocationModalProps) {
    return (
        <div className="fixed inset-0 z-50 bg-hover-blue bg-opacity-50 flex items-center justify-center px-4 py-10 overflow-scroll scrollbar-none" onClick={onClose}>
            <div className="bg-white/90 w-full max-w-[600px] min-h-36 h-auto flex flex-col gap-4 rounded-lg shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
            >
                <X
                    size={20}
                    className=' absolute top-2 right-2 text-white bg-primary rounded-full p-0.5 ml-auto cursor-pointer'
                    onClick={onClose}
                />
                <h2 className='text-xl text-primary font-semibold'>{location.address}</h2>
                <img
                    className='object-cover w-full rounded-sm'
                    src={location.imageUrl}
                    alt={location.address} />

                {location.type === 'patrimonio' && (
                    <div className='flex justify-between items-center'>
                        <p className='text-sm text-primary'>{location.location}</p>
                        <p className='text-sm text-primary'>{location.segment}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
