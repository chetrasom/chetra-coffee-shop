import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const hero1 = "https://ik.imagekit.io/phkgtl3vm/Kh-coffee/hero.png?updatedAt=1755926550030";
const hero2 = "https://ik.imagekit.io/phkgtl3vm/Sachet%20Coffee/ezgif-8ebc9623ed827f.jpg?updatedAt=1755941727211";
const hero3 = "/img/hero/hero2.jpg";
const hero4 = "/img/hero/hero3.jpg";
const hero5 = "/img/hero/hero4.jpg";

const carouselImages = [hero1];

const HeroCarousel = () => {
    return (
        <Carousel>
            <CarouselContent>
                {carouselImages.map((image, index) => {
                    return (
                        <CarouselItem key={index}>
                            <Card className='rounded-3xl'>
                                <CardContent className='p-2'>
                                    <figure className='relative aspect-[4/4] rounded-3xl overflow-hidden'>
                                        <Image 
                                            src={image}
                                            alt="img"
                                            fill
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="w-full h-full object-contain"
                                        />
                                    </figure>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
export default HeroCarousel