"use client";

import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import IconButton from "@/components/ui/IconButton";
import ScreenTitle from "@/components/ui/ScreenTitle";
import { getCityKey } from "@/lib/world-clock";
import { useWorldClockStore } from "@/stores/WorldClockStore";
import { WorldClock } from "@/types/worldclock";
import { Check, Plus } from "lucide-react";
import AddCityDrawer from "./AddCityDrawer";
import WorldClockRow from "./WorldClockRow";

const MobileWorldClockScreen = () => {
    const {
        worldClocks,
        addCity,
        isDrawerOpen,
        setDrawerOpen,
        isEditing,
        setEditing
    } = useWorldClockStore();

    return (
        <>
            {
                worldClocks.length > 0 &&
                (<section
                    className="fixed top-2 flex w-full justify-between items-center pt-1 px-5"
                >
                    {isEditing ? (
                        <IconButton
                            icon={Check}
                            aria-label="Save Edit"
                            onClick={() => setEditing(false)}
                        />
                    ) : (
                        <Button text={"Edit"}
                            onClick={() => setEditing(true)}
                        />
                    )}
                    <IconButton
                        icon={Plus}
                        aria-label="Add City"
                        onClick={() => setDrawerOpen(true)}
                    />
                </section>)
            }
            {
                worldClocks.length === 0 &&
                (<section
                    className="fixed top-2 flex w-full justify-end items-center pt-1 px-5"
                >
                    <IconButton
                        icon={Plus}
                        aria-label="Add City"
                        onClick={() => setDrawerOpen(true)}
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
                open={isDrawerOpen}
                onOpenChange={setDrawerOpen}
                addNewCity={addCity}
            />
        </>
    )
}

export default MobileWorldClockScreen