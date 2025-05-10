import { cn } from "@/lib/utils"

const EmptyList = ({
    heading = 'No items found.',
    className,
    children
}: {
    heading?: string;
    className?: string;
    children?: React.ReactNode
}) => {
    return (
        <div className="text-center space-y-8">
            <h2 className={cn('text-2xl text-red-500', className)}>{heading}</h2>
            {children}
        </div>
    )
}
export default EmptyList