import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { LuAlignLeft } from 'react-icons/lu';
import { links } from '@/data';
import UserIcon from './UserIcon';
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import SignOutLink from './SignOutLink';
import DarkModeDropdown from './DarkModeDropdown';

const LinksDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"outline"} className='gap-x-3 h-10 max-w-[120px] w-full px-3 transition lg:max-w-max'>
                    <LuAlignLeft className='h-[1.3rem] w-[1.3rem] text-primary dark:text-white' />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='w-40 z-10' align='start' sideOffset={10}>
                <SignedOut>
                    <DropdownMenuItem>
                        <SignInButton mode='modal'>
                            <button aria-label='login' className='w-full text-left'>Login</button>
                        </SignInButton>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <SignUpButton mode='modal'>
                            <button aria-label='register' className='w-full text-left'>Register</button>
                        </SignUpButton>
                    </DropdownMenuItem>
                </SignedOut>

                <SignedIn>
                    {links.map((link) => {
                        return (
                            <DropdownMenuItem key={link.href}>
                                <Link href={link.href} className='capitalize w-full'>
                                    {link.label}
                                </Link>
                            </DropdownMenuItem>
                        );
                    })}
                    <DarkModeDropdown />
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                    <SignOutLink />
                </DropdownMenuItem>

                </SignedIn>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default LinksDropdown