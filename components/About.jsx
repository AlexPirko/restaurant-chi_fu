'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

import { Button } from './ui/button';

const About = () => {
    return (
        <section
            className='grid grid-cols-1 xl:grid-cols-2 gap-x-16 p-8 md:p-12 xl:p-0 items-center'
            id='about'>
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.4 }}
                className='xl:pl-[135px]'>
                <h1 className='mb-9'>About Us</h1>
                <p className='mb-8'>
                    Restaurant where history intertwines with style. Eastern culture becomes more
                    accessible through flavors expertly interpreted by the Chef. Traditional Asian
                    cuisine is complemented by their unique vision, reflected in the
                    establishment&#39;s menu.
                </p>
                <p>
                    At ChiFu Restaurant all dishes are prepared in an open kitchen equipped with a
                    robata grill. Restaurant guests find themselves face to face with the Chef, able
                    to observe the cooking process firsthand.
                </p>
            </motion.div>
            <motion.div
                variants={fadeIn('left', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.4 }}>
                <Image
                    src='/about/img.png'
                    width={705}
                    height={771}
                    alt='restaurant background'
                    className='hidden xl:flex'
                />
            </motion.div>
        </section>
    );
};

export default About;
