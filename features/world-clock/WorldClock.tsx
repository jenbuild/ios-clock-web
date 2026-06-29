import DesktopWorldClock from "./DesktopWorldClock"
import MobileWorldClock from "./MobileWorldClock"

const WorldClock = () => {
    return (
        <>
            <div className="md:hidden">
                <MobileWorldClock />
            </div>

            <div className="hidden md:block">
                <DesktopWorldClock />
            </div>
        </>
    )
}

export default WorldClock