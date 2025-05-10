"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface VideoSlideProps {
    item: {
        source: string;
        thumbnail: string;
        name: string;
    };
    index: number;
}  

const VideoSlide = ({ item, index }: VideoSlideProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    
    const [isPaused, setIsPaused] = useState(true);

    const handleVideoClick = () => {
        const video = videoRef.current;
        if (!video) return;
    
        if (video.paused) {
            video.play();
            setIsPaused(false);
        } else {
            video.pause();
            setIsPaused(true);
        }
    };

    return (
        <div className="relative rounded-xl overflow-hidden shadow-lg bg-muted">
            <video
                ref={videoRef}
                playsInline
                className="w-full h-full object-cover cursor-pointer"
                muted
                loop
                preload="metadata"
                onClick={handleVideoClick}
            >
                <source src={item.source} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Custom Play Button */}
            {isPaused && (
                <div 
                    className="absolute inset-0 flex items-center justify-center z-10"
                    onClick={handleVideoClick}
                >
                    <button className="bg-black/60 text-white hover:bg-black/80 transition w-12 h-12 rounded-full">
                        ▶
                    </button>
                </div>
            )}

            {/* Bottom Info Section */}
            <div className="absolute bottom-0 left-0 w-full pointer-events-none">
                <div className="bg-primary text-white drop-shadow-sm w-full flex items-center justify-between p-2 pointer-events-auto">
                    <figure className="relative -mt-10 w-20 h-20">
                        <Image
                            src={item.thumbnail}
                            alt="thumbnail"
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </figure>
                    <div className="flex-1">
                        <h4>{item.name}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VideoSlide