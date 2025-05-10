import Image from "next/image";

type FeatureCardProps = {
    icon: string;
    title: string;
    description: string;
};

const FeaturedCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
        <div className="bg-muted border border-primary/10 rounded-xl p-5 text-center transition-colors duration-300">
            <figure className="relative overflow-hidden w-[75px] h-[75px] rounded-full shadow-lg mx-auto">
                <Image 
                    src={icon} 
                    alt={title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority 
                    className="w-full h-full object-cover" 
                />
            </figure>
            <h4 className="h4 text-primary font-semibold mt-2 mb-3">{title}</h4>
            <p className="text-[15px] text-gray-700 dark:text-gray-300">{description}</p>
        </div>
    )
}
export default FeaturedCard