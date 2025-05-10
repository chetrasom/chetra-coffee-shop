import { LuUser } from 'react-icons/lu';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';

const UserIcon = async () => {
    const user = await currentUser();
    const profileImage = user?.imageUrl;

    if (profileImage) {
        return (
            <figure className='relative w-6 h-6 rounded-full overflow-hidden'>
                <Image 
                    src={profileImage}
                    alt='profile-image'
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='w-full h-full object-cover'
                />
            </figure>
        );
    }

    return (
        <LuUser className='w-6 h-6 bg-primary rounded-full text-white' />
    )
}
export default UserIcon