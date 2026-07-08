import { Tab } from "@/types/tabs";
import { AlarmClock, Clock10, Globe, Timer } from "lucide-react";

export const navigationItems = [
	{
		href: "/world-clock",
		label: "World Clock",
		icon: Globe,
	},
	{
		href: "/alarm",
		label: "Alarms",
		icon: AlarmClock,
	},
	{
		href: "/stopwatch",
		label: "Stopwatch",
		icon: Timer,
	},
	{
		href: "/timer",
		label: "Timers",
		icon: Clock10,
	},
] satisfies {
	href: String;
	label: Tab;
	icon: React.ElementType;
}[];
