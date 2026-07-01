import DesktopAlarmScreen from "./DesktopAlarmScreen"
import MobileAlarmScreen from "./MobileAlarmScreen"

const AlarmScreen = () => {
    return (
        <>
            <div className="md:hidden">
                <MobileAlarmScreen />
            </div>

            <div className="hidden md:block">
                <DesktopAlarmScreen />
            </div>
        </>
    )
}

export default AlarmScreen