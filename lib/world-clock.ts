import { WorldClock } from "@/types/worldclock";

export function getCityKey(city: WorldClock) {
	return `${city.city}-${city.country}`
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-zA-Z0-9]+/g, "-")
		.replace(/^-|-$/g, "")
		.toLowerCase();
}
