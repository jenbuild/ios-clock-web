"use client";

import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import IconButton from "@/components/ui/IconButton";
import ScreenTitle from "@/components/ui/ScreenTitle";
import { getCityKey } from "@/lib/world-clock";
import { WorldClock } from "@/types/worldclock";
import { Check, Plus } from "lucide-react";
import { useState } from "react";
import AddCityDrawer from "./AddCityDrawer";
import WorldClockRow from "./WorldClockRow";

const worldClocksData: WorldClock[] = [
]

const MobileWorldClockScreen = () => {
    const [isAddCityDrawerOpen, setIsAddCityDrawerOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [worldClocks, setWorldClocks] = useState<WorldClock[]>([])
    const addNewCity = (city: WorldClock) => {
        setWorldClocks(prev => [...prev, city]);
        setIsAddCityDrawerOpen(false);
    }

    return (
        <>
            {
                worldClocksData.length > 0 &&
                (<section
                    className="fixed top-2 flex w-full justify-between items-center pt-1 px-5"
                >
                    {isEditMode ? (
                        <IconButton
                            icon={Check}
                            aria-label="Save Edit"
                            onClick={() => setIsEditMode(false)}
                        />
                    ) : (
                        <Button text={"Edit"}
                            onClick={() => setIsEditMode(true)}
                        />
                    )}
                    <IconButton
                        icon={Plus}
                        aria-label="Add City"
                        onClick={() => setIsAddCityDrawerOpen(true)}
                    />
                </section>)
            }
            {
                worldClocksData.length === 0 &&
                (<section
                    className="fixed top-2 flex w-full justify-end items-center pt-1 px-5"
                >
                    <IconButton
                        icon={Plus}
                        aria-label="Add City"
                        onClick={() => setIsAddCityDrawerOpen(true)}
                    />
                </section>)
            }
            <section className="px-5">
                <ScreenTitle title="World Clock" />
                <section className="mt-1">
                    {worldClocks.length === 0 &&
                        <div className="h-[70vh] w-full flex items-center justify-center text-2xl text-white/30">
                            No World Clocks
                        </div>
                    }
                    {worldClocks.map((city: WorldClock, index: number) => {
                        return (
                            <div key={getCityKey(city)}>
                                {index == 0 && <Divider />}
                                <WorldClockRow {...city} />
                            </div>
                        )
                    })}
                </section>
            </section>
            <AddCityDrawer
                open={isAddCityDrawerOpen}
                onOpenChange={setIsAddCityDrawerOpen}
                addNewCity={addNewCity}
            />
        </>
    )
}

export default MobileWorldClockScreen