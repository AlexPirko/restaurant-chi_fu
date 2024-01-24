'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { UserButton } from '@/components/auth/user-button';
import { RoleGate } from '@/components/auth/role-gate';

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className='bg-secondary flex justify-between items-center p-4 rounded-xl max-w-[900px] shadow-sm'>
            <div className='flex flex-wrap gap-2 pr-2'>
                <Button
                    size='xsm'
                    asChild
                    variant={pathname === '/client' ? 'default' : 'outline'}>
                    <Link href='/client'>Profile</Link>
                </Button>
                <RoleGate>
                    <Button
                        size='xsm'
                        asChild
                        variant={pathname === '/admin' ? 'default' : 'outline'}>
                        <Link href='/admin'>Admin</Link>
                    </Button>
                </RoleGate>
                <Button
                    size='xsm'
                    asChild
                    variant={pathname === '/settings' ? 'default' : 'outline'}>
                    <Link href='/settings'>Settings</Link>
                </Button>
            </div>
            <UserButton />
        </nav>
    );
};
