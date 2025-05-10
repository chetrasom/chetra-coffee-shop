'use client';

import LottieAnimation from "@/components/LottieAnimation";

const Loading = () => {
    return (
        <div className="fixed inset-0 z-50 w-full h-screen flex items-center justify-center bg-muted dark:bg-muted-foreground">
            <LottieAnimation />
        </div>
    )
}
export default Loading;