'use client';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '../ui/button';
import { LuShare2 } from 'react-icons/lu';

import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon,
} from 'react-share';

type ShareButtonProp = {
    productId: string; 
    name: string;
}

const ShareButton = ({ name, productId }: ShareButtonProp) => {
    const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
    const shareLink = `${url}/products/${productId}`;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    type='button'
                    size={"icon"}
                    variant={"outline"}
                    className='border border-[#bd7a38] rounded-full bg-background dark:bg-muted'
                >
                    <LuShare2 className='text-secondary w-4 h-4' />
                </Button>
            </PopoverTrigger>
            <PopoverContent
                side='top'
                align='end'
                sideOffset={10}
                className='flex items-center gap-x-2 justify-center w-full'
            >
                <FacebookShareButton url={shareLink} title={name}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <TwitterShareButton url={shareLink} title={name}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>

                <LinkedinShareButton url={shareLink} title={name}>
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>

                <EmailShareButton url={shareLink} title={name}>
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </PopoverContent>
        </Popover>
    )
}
export default ShareButton