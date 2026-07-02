import { motion } from 'motion/react';

interface ButtonProps {
    text: string;
}

const Button = ({
    text,
    ...props
}: ButtonProps) => {
    return (
        <motion.button
            whileTap={{ scale: 1.3 }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 25,
            }}
            className="rounded-full bg-[var(--surface-secondary)] px-4 py-2"
            {...props}
        >
            {text}
        </motion.button>
    )
}

export default Button