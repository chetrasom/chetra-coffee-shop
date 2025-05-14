"use client"

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const DarkMode = () => {
    const { theme, setTheme } = useTheme();
    const switchTheme = theme === "dark" ? "light" : "dark";

    return (
        <Button 
            onClick={() => setTheme(switchTheme)}
            variant="outline" 
            size="icon" 
            className="h-10 relative lg:w-10"
        >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all text-primary dark:text-custom-white dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all text-primary dark:text-custom-white dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
export default DarkMode