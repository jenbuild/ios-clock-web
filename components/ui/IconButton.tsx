import { LucideIcon } from "lucide-react";
import clsx from "clsx";
import { motion, HTMLMotionProps } from "motion/react";


interface IconButtonProps
    extends Omit<HTMLMotionProps<"button">, "children"> {
    icon: LucideIcon;
    size?: number;
}

export default function IconButton({
    icon: Icon,
    size = 24,
    className,
    ...props
}: IconButtonProps) {

    return (
        <motion.button
            whileTap={{ scale: 1.3 }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 25,
            }}
            className={clsx(
                "flex h-11 w-11 items-center justify-center rounded-full bg-[#3a3a3c] transition-colors touch-manipulation",
                className
            )}
            {...props}
        >
            <Icon size={size} strokeWidth={2} />
        </motion.button>
    );
}