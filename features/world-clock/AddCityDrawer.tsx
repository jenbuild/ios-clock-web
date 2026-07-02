"use client";

import IconButton from "@/components/ui/IconButton";
import { X } from "lucide-react";
import cities from "@/data/timezones.json";
import Divider from "@/components/ui/Divider";
import { Drawer } from "vaul";
import { WorldClockRowProps } from "@/types/worldclock";

interface AddCityDrawerProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    addNewCity: (city: WorldClockRowProps) => void;
}

export default function AddCityDrawer({
    open,
    onOpenChange,
    addNewCity,
}: AddCityDrawerProps) {
    return (
        <Drawer.Root
            open={open}
            onOpenChange={onOpenChange}
        >
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="bg-gray-100 flex flex-col h-[97%] fixed bottom-0 left-0 right-0 outline-none z-60 rounded-t-[28px]">
                    <div className="h-[97%] px-5 fixed top-2 z-75">
                        <IconButton
                            icon={X}
                            aria-label="Close Drawer"
                            onClick={() => onOpenChange(false)}
                            className="text-white"
                        />
                    </div>
                    <div className="fixed top-4 w-full text-center text-white text-xl font-semibold z-70">
                        Choose a City
                    </div>
                    <div className="fixed top-0 w-full h-15 bg-gray-800 blur-3xl"></div>
                    <div className=" flex-1 bg-black/70 text-white overflow-y-auto">
                        <div className="mb-20"></div>
                        {Object.entries(cities).map(([letter, items]) => (
                            <section key={letter}>
                                <h2 className="px-5 py-2 text-sm text-white/80">
                                    {letter}
                                </h2>
                                {items.map((city, index) => (
                                    <div className="px-5" key={index}>
                                        <button
                                            className="flex w-full
                                        py-3 active:bg-white/10 truncate"
                                            onClick={() => addNewCity(city)}
                                        >
                                            <span>{city.city}, {city.country}
                                            </span>
                                        </button>
                                        <Divider />
                                    </div>
                                ))}
                            </section>
                        ))}
                        <div className="mb-20"></div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
        // <Drawer
        //     open={open}
        //     onOpenChange={onOpenChange}
        // >
        //     <DrawerContent
        //         className="rounded-t-[28px] border-none bg-[#1c1c1e] text-white"
        //     >
        //         <div className="h-[97%] px-5 fixed top-7 z-40">
        //             <IconButton
        //                 icon={X}
        //                 aria-label="Close Drawer"
        //                 onClick={() => onOpenChange(false)}
        //             />
        //         </div>
        //         <div className="fixed top-9 w-full text-center text-xl font-semibold">
        //             Choose a City
        //         </div>

        //         <div className="flex-1 overflow-y-auto">
        //             <div className="mb-20"></div>
        //             {Object.entries(cities).map(([letter, items]) => (

        //                 <section key={letter}>

        //                     <h2 className="px-5 py-2 text-sm text-white/80">
        //                         {letter}
        //                     </h2>

        //                     {items.map((city, index) => (
        //                         <div className="px-5" key={index}>
        //                             <button
        //                                 className="flex w-full
        //                                 py-3 active:bg-white/10"
        //                             >
        //                                 <span>{city.city}, {city.country}
        //                                 </span>
        //                             </button>
        //                             <Divider />
        //                         </div>
        //                     ))}

        //                 </section>

        //             ))}
        //             <div className="mb-20"></div>
        //         </div>
        //     </DrawerContent>
        // </Drawer>
    );
}