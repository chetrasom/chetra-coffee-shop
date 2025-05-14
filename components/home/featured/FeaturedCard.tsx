import { IconType } from "react-icons";

type FeatureCardProps = {
    icon: IconType;
    title: string;
    description: string;
};

const FeaturedCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
    return (
        <div className="relative bg-background border border-[#f5d8b7]/50 shadow-lg rounded-xl overflow-hidden py-8 px-5">
            <div className="border border-white dark:border-[#f5d8b7]/50 overflow-hidden w-[75px] h-[75px] rounded-full shadow-lg mx-auto flex items-center justify-center">
                <Icon className="text-secondary text-3xl" />
            </div>
            <div className="text-center">
                <h4 className="h4 text-primary font-semibold mt-4 mb-3">{title}</h4>
                <p className="text-[15px] text-gray-700 dark:text-gray-300">{description}</p>
            </div>
        </div>
    )
}
export default FeaturedCard