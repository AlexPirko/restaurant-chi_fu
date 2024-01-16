'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const menu = [
    {
        img: '/menu/spring-roll.jpg',
        title: 'Spring Roll',
        price: '$9.75',
    },
    {
        img: '/menu/noodles.jpg',
        title: 'Drunken Noodles',
        price: '$17.50',
    },
    {
        img: '/menu/fried-rice.jpg',
        title: 'Thai Fried Rice',
        price: '$18.95',
    },
    {
        img: '/menu/rice.jpg',
        title: 'Banh Mi',
        price: '$12.50',
    },
];

const Menu = () => {
    return (
        <section className='relative py-12 xl:py-24 bg-menu' id='menu'>
            <div className='container mx-auto'>
                <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className='max-w-[570px] mx-auto text-center xl:text-right'>
                    <h2 className='mb-3'>Favorite Menu</h2>
                    <Link
                        href='/all-menu'
                        className='text-primary flex justify-center xl:justify-end items-center mb-16'>
                        View all
                        <IoIosArrowRoundForward className='text-3xl' />
                    </Link>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.2 }}
                    className='grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-4 xl:grid-cols-4'>
                    {menu.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className='max-w-[370px] xl:max-w-[270px] bg-white shadow-primary mx-auto xl:mx-0 group'>
                                <div className='overflow-hidden'>
                                    <Image
                                        src={item.img}
                                        width={370}
                                        height={370}
                                        alt='dish'
                                        className='group-hover:scale-110 transition-all duration-300'
                                    />
                                </div>
                                <div className='pt-5 pb-7 px-8'>
                                    <Link href='/'>
                                        <h3 className='font-poppins text-dark mb-4'>
                                            {item.title}
                                        </h3>
                                    </Link>
                                    <div className='text-xl font-poppins font-semibold text-secondary'>
                                        {item.price}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Menu;
