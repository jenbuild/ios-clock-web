"use client";

import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
} from "@/components/ui/drawer";
import IconButton from "@/components/ui/IconButton";
import { X } from "lucide-react";
import cities from "@/data/timezones.json";
import Divider from "@/components/ui/Divider";

interface AddCityDrawerProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function AddCityDrawer({
    open,
    onOpenChange,
}: AddCityDrawerProps) {
    return (
        <Drawer
            open={open}
            onOpenChange={onOpenChange}
        >
            <DrawerContent
                className="
                    h-[100dvh]
                    rounded-t-[28px]
                    border-none
                    bg-[#1c1c1e]
                    text-white
                "
            >
                <DrawerHeader className="border-b border-neutral-800">
                    <div className="text-center text-xl font-semibold">
                        Choose a City
                    </div>
                </DrawerHeader>
                <div className="px-5 fixed top-7">
                    <IconButton
                        icon={X}
                        aria-label="Close Drawer"
                        onClick={() => onOpenChange(false)}
                    />
                </div>

                <div className="flex-1 overflow-y-auto">
                    {Object.entries(cities).map(([letter, items]) => (

                        <section key={letter}>

                            <h2 className="px-5 py-2 text-sm text-white/80">
                                {letter}
                            </h2>

                            {items.map((city, index) => (
                                <div className="px-5" key={index}>
                                    <button
                                        className="flex w-full
                                        py-3 active:bg-white/10"
                                    >
                                        <span>{city.city}, {city.country}
                                        </span>
                                    </button>
                                    <Divider />
                                </div>
                            ))}

                        </section>

                    ))}
                </div>

                <DrawerFooter>
                    {/* <Search /> */}
                    <div className="">Search Box</div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}