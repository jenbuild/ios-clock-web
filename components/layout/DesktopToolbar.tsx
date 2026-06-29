"use client";

import { tabs } from "@/constants/tabs";
import clsx from "clsx";
import { motion } from 'motion/react';
import { useState } from "react";

const DesktopToolbar = () => {
    const [activeTab, setActiveTab] = useState("world-clock");

    return (
        <header className="w-full flex justify-center">
            <nav
                className="fixed top-4 z-50 rounded-full border border-white/10 bg-[var(--surface)]/75 backdrop-blur-3xl shadow-2xl"
            >
                <div className="grid h-10 grid-cols-4">
                    {tabs.map((tab) => {
                        const active = activeTab === tab.id;

                        return (
                            <motion.button
                                key={tab.id}
                                whileTap={{ scale: 0.97 }}
                                className={clsx(
                                    "flex flex-col items-center justify-center gap-1 transition-colors text-white"
                                )}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <div className={clsx(
                                    "flex h-9 w-full flex-col items-center justify-center rounded-full duration-300 ease-out px-3",
                                    active ? "bg-[#3a3a3c]" : "bg-transparent"
                                )}>
                                    <span className="text-md font-medium leading-none">
                                        {tab.label}
                                    </span>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>
            </nav>
        </header>
    )
}

export default DesktopToolbar