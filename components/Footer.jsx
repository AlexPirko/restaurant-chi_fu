'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <motion.footer
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.4 }}
            className='bg-footer bg-cover bg-no-repeat text-white pt-16'>
            <div className='container mx-auto'>
                <div className='flex flex-col justify-center sm:flex-row'>
                    <div className='w-[300px] mb-8 xl:mb-0'>
                        <Link href='/'>
                            <Image
                                src='/logo.png'
                                width={90}
                                height={36}
                                alt='logo image'
                            />
                        </Link>
                    </div>
                    <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 md:mb-16'>
                        <div>
                            <h4 className='font-semibold mb-5'>Address</h4>
                            <ul className='flex flex-col gap-y-6 text-sm text-white/70'>
                                <li>
                                    <span>Odesa, Gemchugna St.,7</span>
                                </li>
                                <li>
                                    <span>Odesa, Katerynynska St, 34</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='font-semibold mb-4'>Socials</h4>
                            <ul className='flex flex-col gap-y-5 '>
                                <li>
                                    <Link
                                        href='https://facebook.com/'
                                        className='text-sm text-white/70'>
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='https://instagram.com/'
                                        className='text-sm text-white/70'>
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='https://instagram.com/'
                                        className='text-sm text-white/70'>
                                        Telegram
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='py-4 border-t border-white/10'>
                    <p className='text-white/60 text-center text-sm'>
                        Copyright &copy; ChiFu 2024
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
