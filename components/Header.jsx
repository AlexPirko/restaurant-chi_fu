'use client';
import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Image from 'next/image';
import Link from 'next/link';

import Nav from './Nav';
import { Button } from './ui/button';
import NavMobile from './NavMobile';
import { LoginButton } from './auth/login-button';

const Header = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                active ? 'bg-dark-heavy py-4' : 'bg-none py-8'
            } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-300`}>
            <div className='container xl:max-w-[1340px] mx-auto'>
                <div className='flex items-center justify-between'>
                    <Link href='/'>
                        <Image
                        className='mt-4'
                            src='/logo.png'
                            width={85}
                            height={50}
                            alt='logo'
                        />
                    </Link>
                    <Nav
                        containerStyles='hidden xl:flex gap-x-12 text-white'
                        linkStyles='capitalize'
                    />
                    <div className='hidden md:block'>
                        <ScrollLink
                            to='reservation'
                            smooth={true}>
                            <Button
                                variant='secondary'
                                size='sm'>
                                Book a table
                            </Button>
                        </ScrollLink>
                        <LoginButton>
                            <Link
                                className='ml-4 border-l-2 pl-4'
                                href='/'>
                                Log In
                            </Link>
                        </LoginButton>
                    </div>
                    <NavMobile
                        containerStyles='xl:hidden'
                        iconStyles='text-3xl'
                        linkStyles='uppercase'
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
