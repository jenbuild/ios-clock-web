import { Tab } from "@/types/tabs";
import { AlarmClock, Clock10, Globe, Timer } from "lucide-react";

export const tabs = [
    {
        id: "world-clock",
        label: "World Clock",
        icon: Globe,
    },
    {
        id: "alarm",
        label: "Alarms",
        icon: AlarmClock,
    },
    {
        id: "stopwatch",
        label: "Stopwatch",
        icon: Timer,
    },
    {
        id: "timer",
        label: "Timers",
        icon: Clock10,
    },
] satisfies {
    id: Tab;
    label: string;
    icon: React.ElementType;
}[];