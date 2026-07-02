const ScreenTitle = ({
    title
}: { title: string }) => {
    return (
        <div className="mt-20 mb-2">
            <div className="text-4xl font-bold leading-none">{title}</div>
        </div>
    )
}

export default ScreenTitle