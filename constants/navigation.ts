import { Tab } from "@/types/tabs";
import {
    Globe,
    AlarmClock,
    Timer,
    Clock10,
} from "lucide-react";

export const navigationItems = [
    {
        href: "/world-clock",
        label: "World Clock",
        icon: Globe,
    },
    {
        href: "/alarm",
        label: "Alarm",
        icon: AlarmClock,
    },
    {
        href: "/stopwatch",
        label: "Stopwatch",
        icon: Timer,
    },
    {
        href: "/timer",
        label: "Timer",
        icon: Clock10,
    },
] satisfies {
    href: String;
    label: Tab;
    icon: React.ElementType
}[];