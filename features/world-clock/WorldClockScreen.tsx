import DesktopWorldClockScreen from "./DesktopWorldClockScreen"
import MobileWorldClockScreen from "./MobileWorldClockScreen"

const WorldClockScreen = () => {
    return (
        <>
            <div className="md:hidden">
                <MobileWorldClockScreen />
            </div>

            <div className="hidden md:block">
                <DesktopWorldClockScreen />
            </div>
        </>
    )
}

export default WorldClockScreen