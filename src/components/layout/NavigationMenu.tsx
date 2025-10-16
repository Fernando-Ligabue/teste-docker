'use client';

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems, logoCpme } from "@/lib/constants";
import type { NavItem } from "@/lib/types";
import Image from "next/image";

export function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 869);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setActiveSubmenu(null);
    };

    const handleMainItemClick = (item: NavItem) => {
        if (item.subItems) {
            setActiveSubmenu(prev => (prev === item.label ? null : item.label));
        } else {
            setActiveSubmenu(null);
            setIsOpen(false);
            if (item.href) {
                router.push(item.href);
            }
        }
    };

    const handleSubItemClick = (href: string) => {
        router.push(href);
        setIsOpen(false);
        setActiveSubmenu(null);
    };

    return (
        <nav className="w-fit">
            {isMobile ? (
                <>
                    <button
                        onClick={toggleMenu}
                        className="absolute right-1 p-2 text-default"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? (
                            <X size={28} className="text-white absolute top-[-7rem] sm:top-[-1rem] right-1 z-50" />
                        ) : (
                            <Menu size={28} className="text-white absolute top-[-7rem] sm:top-[-1rem] right-1 z-50" />
                        )}
                    </button>

                    <div
                        className={cn(
                            "fixed inset-0 bg-black/90 backdrop-blur-sm z-40",
                            "transition-all duration-300 ease-in-out",
                            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        )}
                    >
                        <div className="flex flex-col items-start p-6 pt-16 text-white">
                            <div className="w-full space-y-4 mb-8 flex flex-col justify-end items-start">
                                <Link
                                    href="/"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full flex justify-start items-center mb-8">
                                    <Image
                                        width={150}
                                        height={40}
                                        src={logoCpme}
                                        alt="CPME - Caixa de Previdência do Ministério da Educação"
                                        className='w-full min-w-40 max-w-40 h-full'
                                    />
                                </Link>
                                {navItems.map((item) => (
                                    <div key={item.label} className="space-y-3 flex flex-col justify-end items-end">
                                        {item.subItems ? (
                                            <>
                                                <button
                                                    onClick={() => handleMainItemClick(item)}
                                                    className={cn(
                                                        "block text-sm font-medium transition-colors w-full text-left",
                                                        pathname === item.href ? "font-bold" : ""
                                                    )}
                                                >
                                                    {item.label}
                                                </button>
                                                {activeSubmenu === item.label && (
                                                    <div className="pl-4 space-y-1">
                                                        {item.subItems.map((subItem) => (
                                                            <button
                                                                key={subItem.label}
                                                                onClick={() => handleSubItemClick(subItem.href)}
                                                                className={cn(
                                                                    "block text-sm text-white transition-colors w-full text-left border-b border-primary",
                                                                    pathname === subItem.href ? "font-bold" : ""
                                                                )}
                                                            >
                                                                {subItem.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <button
                                                onClick={() => handleMainItemClick(item)}
                                                className={cn(
                                                    "block text-sm font-medium transition-colors w-full text-left",
                                                    pathname === item.href ? "font-bold" : ""
                                                )}
                                            >
                                                {item.label}
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="w-full mx-auto px-4">
                    <div className="flex flex-col w-full">
                        <div className="flex justify-start space-x-6 py-4">
                            {navItems.map((item) => (
                                <div key={item.label} className="relative group inline-block">
                                    {item.subItems ? (
                                        <>
                                            <span
                                                className={cn(
                                                    "font-normal text-sm text-white transition-colors duration-200 cursor-pointer",
                                                    pathname === item.href ? "font-bold" : ""
                                                )}
                                            >
                                                {item.label}
                                            </span>
                                            <div className="absolute left-0 top-full -mt-1.5 hidden group-hover:flex flex-col z-50 min-w-[180px]">
                                                {item.subItems.map((subItem) => (
                                                    <Link
                                                        key={subItem.label}
                                                        href={subItem.href}
                                                        className={cn(
                                                            "pt-2 pl-2 text-sm text-white border-b-primary border-b",
                                                            pathname === subItem.href ? "font-bold" : ""
                                                        )}
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href || "#"}
                                            className={cn(
                                                "font-normal text-sm text-white transition-colors duration-200",
                                                pathname === item.href ? "font-bold" : ""
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
