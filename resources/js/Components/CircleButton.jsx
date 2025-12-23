export default function CircleButton({
    children,
    onClick,
    className,
    ...props
}) {
    return (
        <button
            {...props}
            onClick={onClick}
            className={`inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-700 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
        >
            {children}
        </button>
    );
}
