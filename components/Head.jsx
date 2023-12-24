'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { Button } from './ui/button';

const Head = () => {
    return (
        <section className='bg-head bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0'>
            <div className='container mx-auto' id='home'>
                <div className='flex items-center xl:h-[960px]'>
                    <div className='w-full xl:max-w-[460px] text-center xl:text-left'>
                        <motion.h1
                            variants={fadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }}
                            className='text-white mb-7'>
                            Text text text <br /> text
                        </motion.h1>
                        <motion.p
                            variants={fadeIn('down', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }}
                            className='text-white font-semibold mb-7'>
                            by:{' '}
                            <span className='text-secondary'>Alex I. Joo</span>
                        </motion.p>
                        <motion.p
                            variants={fadeIn('down', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }}
                            className='text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0'>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                        </motion.p>
                        <motion.div
                            variants={fadeIn('down', 0.8)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.4 }}>
                            <Button>Lets eat</Button>
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn('up', 0.8)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className='hidden xl:flex xl:absolute xl:top-[200px] xl:right-0'>
                        <Image
                            src='/head/plate.png'
                            width={756}
                            height={682}
                            alt='plate with food'
                        />
                    </motion.div>
                </div>
            </div>
            <motion.div
                variants={fadeIn('up', 1.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                className='hidden xl:flex xl:relative xl:-top-36'>
                <Image
                    src='/head/coffee.png'
                    width={386}
                    height={404}
                    alt='coffee image'
                />
            </motion.div>
        </section>
    );
};

export default Head;
