"use client";

import { navigationItems } from "@/constants/navigation";
import clsx from "clsx";
import { motion } from 'framer-motion';
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNavigation = () => {
    const pathname = usePathname();
    const activeTabId = navigationItems.findIndex((tab) => tab.href === pathname);

    return (
        <header className="fixed pt-4 pb-2 z-50 w-full flex justify-center bg-black">
            <nav
                className="rounded-full border border-white/20 bg-[var(--surface)]/75 backdrop-blur-3xl shadow-2xl"
            >
                <div className="grid h-10 grid-cols-4">
                    {navigationItems.map((tab, index) => {
                        const active = pathname === tab.href;

                        return (
                            <Link
                                key={tab.href}
                                href={tab.href}
                                className={clsx(
                                    "flex  items-center justify-center transition-colors text-white"
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
                                        active ? "bg-[#3a3a3c]" : "bg-transparent",
                                        "hover:bg-[#3a3a3c]/90"
                                    )}
                                >
                                    <span className="text-md font-medium leading-none">
                                        {tab.label}
                                    </span>
                                </motion.div>
                                <div className={clsx(index !== activeTabId && index !== navigationItems.length - 1 && index !== activeTabId - 1 && "border-r-2 border-white/20 h-[20px]")}></div>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    )
}

export default DesktopNavigation;