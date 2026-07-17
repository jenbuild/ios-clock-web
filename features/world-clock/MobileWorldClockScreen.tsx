"use client";

import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import IconButton from "@/components/ui/IconButton";
import ScreenTitle from "@/components/ui/ScreenTitle";
import { getCityKey } from "@/lib/world-clock";
import { useWorldClockStore } from "@/stores/WorldClockStore";
import { WorldClock } from "@/types/worldclock";
import {
    DndContext,
    DragEndEvent,
    PointerSensor,
    closestCenter,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    SortableContext,
    arrayMove,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Check, Plus } from "lucide-react";
import AddCityDrawer from "./AddCityDrawer";
import WorldClockRow from "./WorldClockRow";

const MobileWorldClockScreen = () => {
    const {
        worldClocks,
        addCity,
        isDrawerOpen,
        setDrawerOpen,
        isEditing,
        setEditing,
        reorderCities,
    } = useWorldClockStore();

    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = ({ active, over }: DragEndEvent) => {
        if (!over || active.id === over.id) return;

        const oldIndex = worldClocks.findIndex(
            (city) => getCityKey(city) === active.id,
        );
        const newIndex = worldClocks.findIndex(
            (city) => getCityKey(city) === over.id,
        );

        if (oldIndex !== -1 && newIndex !== -1) {
            reorderCities(arrayMove(worldClocks, oldIndex, newIndex));
        }
    };

    return (
        <>
            {worldClocks.length > 0 && (
                <section className="fixed top-2 flex w-full justify-between items-center pt-1 px-5">
                    {isEditing ? (
                        <IconButton
                            icon={Check}
                            aria-label="Save Edit"
                            onClick={() => setEditing(false)}
                        />
                    ) : (
                        <Button text={"Edit"} onClick={() => setEditing(true)} />
                    )}
                    <IconButton
                        icon={Plus}
                        aria-label="Add City"
                        onClick={() => setDrawerOpen(true)}
                    />
                </section>
            )}
            {worldClocks.length === 0 && (
                <section className="fixed top-2 flex w-full justify-end items-center pt-1 px-5">
                    <IconButton
                        icon={Plus}
                        aria-label="Add City"
                        onClick={() => setDrawerOpen(true)}
                    />
                </section>
            )}
            <section className="px-5">
                <ScreenTitle title="World Clock" />
                <section className="mt-1">
                    {worldClocks.length === 0 && (
                        <div className="h-[70vh] w-full flex items-center justify-center text-2xl text-white/30">
                            No World Clocks
                        </div>
                    )}
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={worldClocks.map(getCityKey)}
                            strategy={verticalListSortingStrategy}
                        >
                            {worldClocks.map((city: WorldClock, index: number) => (
                                <div key={getCityKey(city)}>
                                    {index === 0 && <Divider />}
                                    <WorldClockRow
                                        // id={getCityKey(city)}
                                        {...city}
                                    />
                                </div>
                            ))}
                        </SortableContext>
                    </DndContext>
                </section>
            </section>
            <AddCityDrawer
                open={isDrawerOpen}
                onOpenChange={setDrawerOpen}
                addNewCity={addCity}
            />
        </>
    );
};

export default MobileWorldClockScreen;