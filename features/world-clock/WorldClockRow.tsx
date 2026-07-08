import Divider from "@/components/ui/Divider";
import { useWorldClockStore } from "@/stores/WorldClockStore";
import { WorldClock } from "@/types/worldclock";
import { formatCityTime, getOffset, getRelativeDay } from "@/utils/timezone";


const WorldClockRow = (city: WorldClock) => {
    const time = formatCityTime(city.timezone);
    const day = getRelativeDay(city.timezone);
    const offset = getOffset(city.timezone);

    const { isEditing } = useWorldClockStore();

    return (
        <section className="pt-2">
            <div className="w-full flex justify-between items-end">
                <div>
                    <span className="text-sm text-white/50 font-normal">
                        {`${day}, ${offset}`}
                    </span>
                    <div className="text-2xl">
                        {city.city}
                    </div>
                </div>
                <div className="text-2xl">
                    <span className="text-6xl">{time.hour}:{time.minute}</span>{time.period}
                </div>
            </div>
            <div className="pt-2">
                <Divider />
            </div>
        </section>
    )
}

export default WorldClockRow