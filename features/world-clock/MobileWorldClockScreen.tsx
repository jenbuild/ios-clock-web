"use client";

import { Plus } from "lucide-react"
import WorldClockRow from "./WorldClockRow"
import { WorldClockRowProps } from "@/types/worldclock"
import Divider from "@/components/ui/Divider"
import { useCurrentTime } from "@/hooks/useCurrentTime"

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
    const now = useCurrentTime();

    return (
        <>
            <section className="fixed top-2 flex w-full justify-between items-center pt-1 px-4">
                <button className="rounded-full bg-[var(--surface-secondary)] px-4 py-2">Edit</button>
                <button className="rounded-full bg-[#3a3a3c] p-2">
                    <Plus size={24} />
                </button>
            </section>
            <section className="px-5">
                <section className="mt-20 mb-2">
                    <div className="text-4xl font-bold leading-none tracking-[-0.04em">World Clock</div>
                </section>
                <section className="mt-1">
                    {worldClocksData.map((clock: WorldClockRowProps, index: number) => {
                        return (
                            <div key={index}>
                                {index == 0 && <Divider />}
                                <WorldClockRow {...clock} />
                            </div>
                        )
                    })}
                </section>
            </section>
        </>
    )
}

export default MobileWorldClockScreen