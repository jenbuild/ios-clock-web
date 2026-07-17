import Divider from "@/components/ui/Divider";
import { useWorldClockStore } from "@/stores/WorldClockStore";
import { WorldClock } from "@/types/worldclock";
import { formatCityTime, getOffset, getRelativeDay } from "@/utils/timezone";
import clsx from "clsx";
import { Menu, Minus } from "lucide-react";


const WorldClockRow = (city: WorldClock) => {
    const time = formatCityTime(city.timezone);
    const day = getRelativeDay(city.timezone);
    const offset = getOffset(city.timezone);

    const { isEditing } = useWorldClockStore();

    return (
        <section className="pt-2">
            <div className={clsx("w-full flex justify-between",
                isEditing ? "items-center" : "items-end"
            )}>
                <div className="flex items-center gap-3">
                    {isEditing && (
                        <div className="bg-[#fe4144] rounded-full p-1">
                            <Minus color="white" size={12} />
                        </div>
                    )}
                    <div>
                        <span className="text-sm text-white/50 font-normal">
                            {`${day}, ${offset}`}
                        </span>
                        <div className="text-2xl">
                            {city.city}
                        </div>
                    </div>
                </div>
                {isEditing ? (
                    <div>
                        <Menu color="#3a3a3c" />
                    </div>
                ) : (
                    <div className="text-2xl">
                        <span className="text-6xl">{time.hour}:{time.minute}</span>{time.period}
                    </div>
                )}
            </div>
            <div className="pt-2">
                <Divider />
            </div>
        </section>
    )
}

export default WorldClockRow