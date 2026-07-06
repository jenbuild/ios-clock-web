import BottomNavigation from "./BottomNavigation";
import DesktopNavigation from "./DesktopNavigation";

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className="min-h-dvh bg-black text-white">
            <div className="flex min-h-dvh flex-col md:hidden">
                <main className="flex-1 overflow-y-auto pb-20">
                    {children}
                </main>

                <BottomNavigation />
            </div>

            <div className="hidden md:flex md:flex-col min-h-dvh">
                <DesktopNavigation />
                <main className="flex-1 overflow-y-auto">
                    <div className="mx-auto h-full max-w-7xl px-8 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AppLayout