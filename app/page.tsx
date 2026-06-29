import AppLayout from "@/components/layout/AppLayout";
import MobileWorldClock from "@/features/world-clock/MobileWorldClock";

export default function Home() {
  return (
    <AppLayout>
      <div>
        <MobileWorldClock />
      </div>
    </AppLayout>
  );
}
