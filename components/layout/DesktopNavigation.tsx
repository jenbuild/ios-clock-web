"use client";

import { navigationItems } from "@/constants/navigation";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion';

const DesktopNavigation = () => {
    const pathname = usePathname();

    return (
        <header className="w-full flex justify-center">
            <nav
                className="fixed top-4 z-50 rounded-full border border-white/20 bg-[var(--surface)]/75 backdrop-blur-3xl shadow-2xl"
            >
                <div className="grid h-10 grid-cols-4">
                    {navigationItems.map((tab) => {
                        const active = pathname === tab.href;

                        return (
                            <Link
                                key={tab.href}
                                href={tab.href}
                                className={clsx(
                                    "flex flex-col items-center justify-center gap-1 transition-colors text-white"
                                )}
                            >
                                <motion.div
                                    whileTap={{
                                        scale: 0.88,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 30,
                                    }}
                                    className={clsx(
                                        "flex h-9 w-full flex-col items-center justify-center rounded-full duration-300 ease-out px-3",
                                        active ? "bg-[#3a3a3c]" : "bg-transparent"
                                    )}
                                >
                                    <span className="text-md font-medium leading-none">
                                        {tab.label}
                                    </span>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    )
}

export default DesktopNavigation;