import Divider from "@/components/ui/Divider"
import { WorldClockRowProps } from "@/types/worldclock"


const WorldClockRow = (clock: WorldClockRowProps) => {
    return (
        <section className="pt-2">
            <div className="w-full flex justify-between items-end">
                <div>
                    <span className="text-sm text-white/50 font-normal">
                        {clock.day}
                    </span>
                    <div className="text-2xl">
                        {clock.city}
                    </div>
                </div>
                <div className="text-2xl">
                    <span className="text-6xl">{clock.time}</span>{clock.meridiem}
                </div>
            </div>
            <div className="pt-2">
                <Divider />
            </div>
        </section>
    )
}

export default WorldClockRow