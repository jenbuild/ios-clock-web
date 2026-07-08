"use client";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import ScreenTitle from "@/components/ui/ScreenTitle";
import { Check, Plus } from "lucide-react";
import { useState } from "react";

const MobileTimerScreen = () => {
    const [timers, setTimers] = useState([]);
    const [recents, setRecents] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);

    return (
        <>
            {
                timers.length > 0 && (
                    (<section
                        className="fixed top-2 flex w-full justify-between items-center pt-1 px-5"
                    >
                        {isEditMode ? (
                            <IconButton
                                icon={Check}
                                aria-label="Save Edit"
                                onClick={() => setIsEditMode(false)}
                            />
                        ) : (
                            <Button text={"Edit"}
                                onClick={() => setIsEditMode(true)}
                            />
                        )}
                        <IconButton
                            icon={Plus}
                            aria-label="Add Alarm"
                        />
                    </section>)
                )
            }
            {
                timers.length === 0 &&
                (<section
                    className="fixed top-2 flex w-full justify-start items-center pt-1 px-5"
                >
                    {recents.length > 0 && (
                        <>
                            {isEditMode ? (
                                <IconButton
                                    icon={Check}
                                    aria-label="Save Edit"
                                    onClick={() => setIsEditMode(false)}
                                />
                            ) : (
                                <Button text={"Edit"}
                                    onClick={() => setIsEditMode(true)}
                                />
                            )}
                        </>
                    )}
                </section>)
            }
            <section className="px-5">
                <ScreenTitle title="Timers" />
                <section className="mt-1">
                    {timers.length === 0 &&
                        <div className="h-[70vh] w-full flex items-center justify-center text-2xl text-white/30">
                            No Timers
                        </div>
                    }
                </section>
                <section className="mt-1">
                    {recents.length > 0 &&
                        (
                            <>
                                <div className="text-2xl">Recents</div>
                            </>
                        )}
                </section>
            </section>
        </>
    )
}

export default MobileTimerScreen