import CircularButton from "@/components/ui/CircularButton"
import Divider from "@/components/ui/Divider"

const StopwatchScreen = () => {
    return (
        <div>
            <section id="stopwatch-dial" className="mt-30 px-5">
                <div className="text-7xl text-center">
                    00:00.00
                </div>
                <div className="mt-10 w-full flex justify-between items-center">
                    <div className="">
                        <CircularButton text={"Lap"} />
                    </div>
                    <div className="">
                        <CircularButton text={"Start"} /></div>
                </div>

                <Divider />
            </section>
        </div>
    )
}

export default StopwatchScreen