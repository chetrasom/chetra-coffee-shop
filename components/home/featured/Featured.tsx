import { features } from "@/data"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
    return (
        <div className="container py-16">
            <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-8">
                {features.map((feature, index) => (
                    <FeaturedCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </div>
    )
}
export default Featured