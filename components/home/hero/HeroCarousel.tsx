import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const test1 = "/img/hero/hero1.jpg";
const test2 = "/img/hero/hero2.jpg";
const test3 = "/img/hero/hero3.jpg";
const test4 = "/img/hero/hero4.jpg";

const carouselImages = [test1, test2, test3, test4];

const HeroCarousel = () => {
    return (
        <Carousel>
            <CarouselContent>
                {carouselImages.map((image, index) => {
                    return (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className='p-2'>
                                    <figure className='relative aspect-[4/4] rounded-xl overflow-hidden'>
                                        <Image 
                                            src={image}
                                            alt="img"
                                            fill
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="w-full h-full object-cover"
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