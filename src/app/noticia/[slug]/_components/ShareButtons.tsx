'use client';

import { usePathname } from 'next/navigation';
import { FaFacebookF, FaLinkedin, FaWhatsapp, FaLink } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

import { toast } from 'react-hot-toast';

interface ShareButtonsProps {
    title: string;
    url?: string;
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
    const pathname = usePathname();
    const shareUrl = url || (typeof window !== 'undefined' ? `${window.location.origin}${pathname}` : '');

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            toast.success('Link copiado para o clipboard!');
        } catch (err) {
            toast.error('Erro ao copiar o link.');
        }
    };

    return (
        <div className="flex gap-4 items-center">
            <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaFacebookF size={24} className="text-primary cursor-pointer" />
            </a>

            <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaXTwitter size={24} className="text-primary cursor-pointer" />
            </a>

            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin size={24} className="text-primary cursor-pointer" />
            </a>

            <a
                href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp size={24} className="text-primary cursor-pointer" />
            </a>

            <button onClick={handleCopy} className="text-primary cursor-pointer">
                <FaLink size={24} className="text-primary" />
            </button>
        </div>
    );
}

export default ShareButtons
