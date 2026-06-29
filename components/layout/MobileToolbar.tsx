"use client";

import { motion } from "motion/react";
import clsx from "clsx";
import { tabs } from "@/constants/tabs";
import { useState } from "react";

export default function MobileTabBar() {
    const [activeTab, setActiveTab] = useState("world-clock");

    return (
        <nav
            className="fixed bottom-4 left-4 right-4 z-50 rounded-full border border-white/10 bg-[var(--surface)]/75 backdrop-blur-3xl shadow-2xl"
        >
            <div className="grid h-16 grid-cols-4">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const active = activeTab === tab.id;

                    return (
                        <motion.button
                            key={tab.id}
                            whileTap={{ scale: 0.97 }}
                            className={clsx(
                                "flex flex-col items-center justify-center gap-1 transition-colors",
                                active ? "text-[var(--orange)]" : "text-white"
                            )}
                            onTouchEnd={() => setActiveTab(tab.id)}
                        >
                            <div className={clsx(
                                "flex h-16 w-full flex-col items-center justify-center rounded-full duration-300 ease-out",
                                active ? "bg-[#3a3a3c]" : "bg-transparent"
                            )}>
                                <Icon
                                    size={26}
                                    strokeWidth={2}
                                />

                                <span className="text-[11px] font-medium leading-none pt-2">
                                    {tab.label}
                                </span>
                            </div>
                        </motion.button>
                    );
                })}
            </div>
        </nav>
    );
}