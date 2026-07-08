interface CircularButtonProps {
    text: string
}

const CircularButton = ({
    text,
    ...props
}: CircularButtonProps) => {
    return (
        <div
            className="text-(11px) h-[70px] w-[70px] bg-gray-100 text-black rounded-full flex justify-center items-center mb-3"
        >{text}</div>
    )
}

export default CircularButton