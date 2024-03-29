'use client';

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import Image from 'next/image';
import Link from 'next/link';

import { RiMenu2Line, RiHomeFill } from 'react-icons/ri';
import { IoCloseOutline } from 'react-icons/io5';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { FaUsers, FaEnvelope } from 'react-icons/fa';

import { Button } from './ui/button';
import { LoginButton } from './auth/login-button';

const links = [
    {
        icon: <RiHomeFill />,
        path: 'home',
        name: 'home',
        offset: 0,
    },
    {
        icon: <BiSolidFoodMenu />,
        path: 'menu',
        name: 'menu',
        offset: 0,
    },
    {
        icon: <FaUsers />,
        path: 'about',
        name: 'about',
        offset: 0,
    },
    {
        icon: <FaEnvelope />,
        path: 'contact',
        name: 'contact',
        offset: 0,
    },
];

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className={`${containerStyles}`}>
            <div className='cursor-pointer outline-none'>
                <RiMenu2Line className='text-3xl text-white transition-all duration-300' />
            </div>
            <aside
                className={`${
                    isOpen ? 'right-0' : '-right-full'
                } bg-dark fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}>
                <div className='flex flex-col items-center justify-between h-full'>
                    <div
                        onClick={() => setIsOpen(false)}
                        className='cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 bg-primary hover:bg-primary-hover flex items-center justify-center transition-all duration-500'>
                        <IoCloseOutline />
                    </div>
                    <Link href={'/'}>
                        <Image
                            src='/logo.png'
                            width={90}
                            height={52}
                            alt='logo mobile'
                            className='relative -top-6'
                        />
                    </Link>
                    <div className='flex flex-col gap-y-8'>
                        {links.map((link, index) => {
                            return (
                                <ScrollLink
                                    key={index}
                                    to={link.path}
                                    smooth={false}
                                    offset={link.offset}
                                    className='flex items-center gap-x-3'>
                                    <div className={`${iconStyles}`}>
                                        {link.icon}
                                    </div>
                                    <div className={`${linkStyles}`}>
                                        {link.name}
                                    </div>
                                </ScrollLink>
                            );
                        })}
                    </div>
                    <div>
                        <ScrollLink
                            className='md:hidden'
                            to='reservation'
                            smooth
                            offset={-150}>
                            <Button variant='secondary'>Book a table</Button>
                        </ScrollLink>
                        <LoginButton>
                            <Link
                                className='md:hidden ml-4 border-l-2 pl-4'
                                href='/'>
                                Log In
                            </Link>
                        </LoginButton>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default NavMobile;
