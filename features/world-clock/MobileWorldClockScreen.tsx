"use client";

import { Plus } from "lucide-react"
import WorldClockRow from "./WorldClockRow"
import { WorldClockRowProps } from "@/types/worldclock"
import Divider from "@/components/ui/Divider"
import ScreenTitle from "@/components/ui/ScreenTitle";
import IconButton from "@/components/ui/IconButton";
import Button from "@/components/ui/Button";

const worldClocksData: WorldClockRowProps[] = [
    {
        city: "New Delhi",
        time: "6:58",
        meridiem: "AM",
        day: "Today, +0HRS"
    },
    {
        city: "Dhaka",
        time: "7:28",
        meridiem: "AM",
        day: "Today, +30MINS"
    },
    {
        city: "Cambridge Bay",
        time: "7:28",
        meridiem: "PM",
        day: "Today, -11:30"
    },
]

const MobileWorldClockScreen = () => {
    return (
        <>
            {
                worldClocksData.length > 0 &&
                (<section
                    className="fixed top-2 flex w-full justify-between items-center pt-1 px-5"
                >
                    <Button text={"Edit"} />
                    <IconButton
                        icon={Plus}
                        aria-label="Add City"
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
                    />
                </section>)
            }
            <section className="px-5">
                <ScreenTitle title="World Clock" />
                <section className="mt-1">
                    {worldClocksData.map((clock: WorldClockRowProps, index: number) => {
                        return (
                            <div key={index}>
                                {index == 0 && <Divider />}
                                <WorldClockRow {...clock} />
                            </div>
                        )
                    })}
                    {worldClocksData.length === 0 &&
                        <div className="h-[70vh] w-full flex items-center justify-center text-2xl text-white/30">
                            No World Clocks
                        </div>
                    }
                </section>
            </section>
        </>
    )
}

export default MobileWorldClockScreen