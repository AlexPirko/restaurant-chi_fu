'use client';

import { FaUser } from 'react-icons/fa';
import { ExitIcon } from '@radix-ui/react-icons';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useCurrentUser } from '@/hooks/use-current-user';
import { LogoutButton } from '@/components/auth/logout-button';
import Link from 'next/link';

export const UserButton = () => {
    const user = useCurrentUser();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src={user?.image || ''} />
                    <AvatarFallback className='bg-primary'>
                        <FaUser className='text-white' />
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className='w-32 bg-primary text-white font-semibold border-0 '
                align='end'>
                <LogoutButton>
                    <DropdownMenuItem>
                        <ExitIcon className='h-4 w-4 mr-2 font-semibold' />
                        Logout
                    </DropdownMenuItem>
                </LogoutButton>
                <DropdownMenuItem>
                    <Link href={'/'}>Back Home</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
