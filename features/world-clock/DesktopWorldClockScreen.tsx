"use client";

import { getCityKey } from "@/lib/world-clock";
import { useWorldClockStore } from "@/stores/WorldClockStore";
import { WorldClock } from "@/types/worldclock";
import WorldClockCards from "./WorldClockCards";

const DesktopWorldClockScreen = () => {
    const {
        worldClocks,
    } = useWorldClockStore();

    return (
        <div>

            <section className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4">
                {worldClocks.map((city: WorldClock, index: number) => (
                    <div key={getCityKey(city)}>
                        <WorldClockCards
                            {...city}
                        />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default DesktopWorldClockScreen