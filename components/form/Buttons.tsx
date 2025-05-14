'use client';

import { useFormStatus } from 'react-dom';
import { SignInButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import { PiCoffee, PiCoffeeFill } from "react-icons/pi"
import { ReloadIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { LuSquare } from 'react-icons/lu';
import { BsTrash } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';

import { IoIosHeart, IoMdHeartEmpty } from "react-icons/io";

// # Submit Button
type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
    className?: string;
    text?: string;
    size?: btnSize;
    variantStyle?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "accent" | null | undefined;
};

export function SubmitButton({
    className = '',
    text = 'submit',
    size = 'lg',
    variantStyle = "default"
    
}: SubmitButtonProps) {
    const { pending } = useFormStatus();
    
    return (
        <Button
            type='submit'
            disabled={pending}
            className={cn('capitalize btn h-12', className)}
            size={size}
            variant={variantStyle}
        >
            {pending ? (
                <>
                    <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
                    Please wait...
                </>
            ) : (
                text
            )}
        </Button>
    );
};

export function SubmitButtonIcon({ className = ''}: SubmitButtonProps) {
    const { pending } = useFormStatus();
    
    return (
        <Button
            type='submit'
            disabled={pending}
            className={cn('capitalize', className)}
            size={"icon"}
            variant={'outline'}
        >
            {pending ? (
                <>
                    <ReloadIcon className='h-5 w-5 animate-spin' />
                </>
            ) : (
                <BsTrash className="w-5 h-5 text-red-500" />
            )}
        </Button>
    );
}

// # Icon Button
type actionType = 'edit' | 'delete';

export const IconButton = ({ actionType }: { actionType: actionType }) => {
    const { pending } = useFormStatus();

    const renderIcon = () => {
        switch (actionType) {
        case 'edit':
            return <LuSquare />;
        case 'delete':
            return <BsTrash className="w-4 h-4 text-red-500" />;
        default:
            const never: never = actionType;
            throw new Error(`Invalid action type: ${never}`);
        }
    };
    return (
        <Button
            type='submit'
            size='icon'
            variant="outline"
            className='p-2 cursor-pointer'
        >
            {pending ? <ReloadIcon className='animate-spin' /> : renderIcon()}
        </Button>
    );
};

// # Favorites
export const CardSignInButton = () => {
    return (
        <SignInButton mode='modal'>
            <Button
                type='button'
                size={"icon"}
                variant={"outline"}
                className='border border-[#bd7a38] rounded-full bg-background dark:bg-muted'
            >
                <IoMdHeartEmpty className='text-secondary w-5 h-5' />
            </Button>
        </SignInButton>
    )
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
    const { pending } = useFormStatus();

    return (
        <Button
            type='submit'
            size='icon'
            variant='outline'
            className="border border-[#bd7a38] rounded-full bg-background dark:bg-muted"
        >
            {pending ? (
                <ReloadIcon className='animate-spin' />
            ) : isFavorite ? (
                <IoIosHeart className="w-5 h-5 text-red-600" />
            ) : (
                <IoMdHeartEmpty className='w-5 h-5 text-secondary' />
            )}
        </Button>
    )
};

// # Cart
export const ProductSignInButton = () => {
    return (
        <SignInButton mode='modal'>
            <Button type='button' size='default' className='mt-8 btn'>
                Please Sign In
            </Button>
        </SignInButton>
    );
};