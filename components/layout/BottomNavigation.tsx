"use client";

import { navigationItems } from "@/constants/navigation";
import clsx from "clsx";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavigation() {
    const pathname = usePathname();

    return (
        <nav
            className="fixed bottom-4 left-4 right-4 z-50 rounded-full border border-white/10 bg-[var(--surface)]/75 backdrop-blur-3xl shadow-2xl"
        >
            <div className="grid h-16 grid-cols-4">
                {navigationItems.map((tab) => {
                    const Icon = tab.icon;
                    const active = pathname === tab.href;

                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={clsx(
                                "flex flex-col items-center justify-center gap-1 transition-colors",
                                active ? "text-[var(--orange)]" : "text-white"
                            )}
                        >
                            <motion.div
                                whileTap={{
                                    scale: 0.92,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                }}
                                className={clsx(
                                    "flex h-16 w-full flex-col items-center justify-center rounded-full duration-300 ease-out",
                                    active ? "bg-[#3a3a3c]" : "bg-transparent"
                                )}
                            >
                                <Icon
                                    size={26}
                                    strokeWidth={2}
                                />

                                <span className="text-[11px] font-medium leading-none pt-2">
                                    {tab.label}
                                </span>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}