"use client";

import DigitalClock from "@/components/ui/DigitalClock";
import { useWorldClockStore } from "@/stores/WorldClockStore";
import { WorldClock } from "@/types/worldclock";
import { formatCityTime, getOffset, getRelativeDay } from "@/utils/timezone";
import { X } from "lucide-react";
import { useState } from "react";

const WorldClockCards = (city: WorldClock) => {
    const [viewDelete, setViewDelete] = useState(false);

    const time = formatCityTime(city.timezone);
    const day = getRelativeDay(city.timezone);
    const offset = getOffset(city.timezone);

    const { removeCity } = useWorldClockStore();

    const onMouseEnter = () => {
        setViewDelete(true)
    }

    const onMouseLeave = () => {
        setViewDelete(false);
    }

    return (
        <section className="bg-[#313131] rounded-xl p-6 flex flex-col items-center gap-2 relative h-[250px]"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {viewDelete && (<div className="absolute bg-[#8a8a8a] p-1 rounded-full top-2 left-2"
                onClick={() => removeCity(city)}>
                <X size={10} />
            </div>)}
            <div className="">
                <DigitalClock />
            </div>
            <div className="mt-2">
                <div className="flex flex-col items-center gap-2">
                    <div className="text-sm font-semibold text-center font-space-grotesk">
                        {city.city}, {time.hour}:{time.minute}{time.period}
                    </div>
                    <span className="text-sm text-white/50 font-normal font-space-grotesk">
                        {`${day}, ${offset}`}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default WorldClockCards