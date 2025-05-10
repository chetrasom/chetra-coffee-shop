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

const LinksDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className='h-9 flex gap-x-2 px-2 max-w-[100px] lg:gap-x-3'>
                    <LuAlignLeft className='h-[1.2rem] w-[1.2rem] text-custom-green dark:text-custom-white' />
                    <UserIcon />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='w-40' align='end' sideOffset={10}>

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