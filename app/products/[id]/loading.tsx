import { Skeleton } from "@/components/ui/skeleton"

const Loading = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="max-w-5xl mx-auto p-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-x-12">
                    {/* Image Skeleton */}
                    <div className="relative rounded-lg overflow-hidden grid place-items-center">
                        <Skeleton className="w-full h-[17.5rem] lg:h-[23.75rem] rounded-lg bg-muted" />
                    </div>

                    {/* Text Content Skeleton */}
                    <div className="space-y-4">
                        <Skeleton className="h-8 w-3/4 rounded-md bg-muted" />
                        <Skeleton className="h-5 w-1/2 rounded-md bg-muted" />

                        <div className="flex items-center justify-between mb-2 lg:justify-start lg:gap-x-6">
                            <Skeleton className="h-5 w-1/4 rounded-md" />
                            <div className="flex gap-x-2">
                                <Skeleton className="h-8 w-8 rounded-full bg-muted" />
                                <Skeleton className="h-8 w-8 rounded-full bg-muted" />
                            </div>
                        </div>

                        <Skeleton className="h-8 w-1/3 rounded-md bg-muted" />
                        <Skeleton className="h-5 w-full rounded-md bg-muted" />
                        <Skeleton className="h-5 w-full rounded-md bg-muted" />
                        <Skeleton className="h-5 w-1/2 rounded-md bg-muted" />

                        <Skeleton className="h-12 w-full rounded-md bg-muted" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Loading