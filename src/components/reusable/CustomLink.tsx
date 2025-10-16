'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  rounded?: string;
  padding?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

const CustomLink = ({
  href,
  children,
  className = '',
  backgroundColor = 'bg-primary',
  textColor = 'text-white',
  borderColor = 'border-transparent',
  rounded = 'rounded-md',
  padding = 'px-4 py-2.5',
  icon,
  iconPosition = 'right',
  target,
  rel
}: CustomLinkProps) => {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        'inline-flex items-center justify-center font-semibold transition-colors duration-300 border gap-2',
        backgroundColor,
        textColor,
        borderColor,
        rounded,
        padding,
        className
      )}
    >
      {icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'right' && icon}
    </Link>
  )
}

export default CustomLink
