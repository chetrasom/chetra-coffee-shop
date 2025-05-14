"use client"

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from "next-themes"
import { DropdownMenuItem } from '../ui/dropdown-menu';

const DarkModeDropdown = () => {
    const { theme, setTheme } = useTheme();
    const switchTheme = theme === "dark" ? "light" : "dark";

    return (
        <DropdownMenuItem onClick={() => setTheme(switchTheme)} className='gap-x-2'>
            {theme === 'dark' ? <SunIcon className="h-5 w-5 text-amber-400" /> : <MoonIcon className="h-5 w-5 text-[#4E342E]" />}
            {theme === 'dark' ? "Light theme" : "Dark theme"}
        </DropdownMenuItem>
    )
}
export default DarkModeDropdown