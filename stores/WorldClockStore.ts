import { getCityKey } from "@/lib/world-clock";
import { WorldClock } from "@/types/worldclock";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WorldClockStore {
	worldClocks: WorldClock[];
	isEditing: boolean;
	isDrawerOpen: boolean;

	addCity: (city: WorldClock) => void;
	removeCity: (city: WorldClock) => void;
	reorderCities: (worldClocks: WorldClock[]) => void;

	setEditing: (editing: boolean) => void;
	setDrawerOpen: (drawer: boolean) => void;
}

export const useWorldClockStore = create<WorldClockStore>()(
	persist(
		(set, get) => ({
			worldClocks: [],

			isEditing: false,

			isDrawerOpen: false,

			addCity: (city) =>
				set((state) => {
					const exists = state.worldClocks.some(
						(c) => getCityKey(c) === getCityKey(city),
					);

					if (exists) return state;

					return {
						worldClocks: [...state.worldClocks, city],
						isDrawerOpen: false,
					};
				}),

			removeCity: (city) =>
				set((state) => ({
					worldClocks: state.worldClocks.filter(
						(c) => getCityKey(c) !== getCityKey(city),
					),
				})),

			reorderCities: (worldClocks) =>
				set({
					worldClocks,
				}),

			setEditing: (editing) =>
				set({
					isEditing: editing,
				}),

			setDrawerOpen: (drawer) =>
				set({
					isDrawerOpen: drawer,
				}),
		}),
		{ name: "world-clocks" },
	),
);
