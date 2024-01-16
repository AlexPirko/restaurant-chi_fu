'use client';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function MenuPage() {
    const appetizers = [
        {
            title: 'Edamame',
            descr: 'Whole green soy bean pods, steamed & lightly salted',
            price: '$7.50',
        },
        {
            title: 'Vietnamese Spring Roll',
            descr: 'Minced pork, fresh crabmeat and cellophane noodles',
            price: '$9.75',
        },
        {
            title: 'Sichuan Dragon Dumpling',
            descr: 'Steamed with chicken, watercress, and Shiitake mushroom',
            price: '$10.95',
        },
        {
            title: 'Firefly Calamari',
            descr: 'Slightly spicy and crispy served with honey lemon sauce',
            price: '$12.95',
        },
    ];

    const salad_soup = [
        {
            title: 'Miso Soup',
            descr: 'Tofu, seaweed & scallions',
            price: '$7.50',
        },
        {
            title: 'Tom Yum Soup',
            descr: 'Spicy lemongrass broth with mushrooms, galanga & cilantro',
            price: '$8.95',
        },
        {
            title: 'Ginger Salad',
            descr: 'Young tender ginger roots, cabbage, carrot, roasted peanuts & fried shallots',
            price: '$10.50',
        },
    ];

    const rice_noodles = [
        {
            title: 'Tom Yum Noodle Soup',
            descr: 'Spicy lemongrass-based broth with vermicelli, mushroom, cilantro, and bean sprout',
            price: '$17.50',
        },
        {
            title: 'Thai Fried Rice',
            descr: 'Stir-fry rice with egg, green chili, and fish sauce',
            price: '$18.95',
        },
        {
            title: 'Drunken Noodles',
            descr: 'Wide rice noodles, minced chicken, peppers, onions, and basil',
            price: '$17.50',
        },
        {
            title: 'Curry Laksa',
            descr: 'Egg noodles, vermicelli, fried tofu in a coconut milk based spicy, creamy, rich, and aromatic broth',
            price: '$19.95',
        },
        {
            title: 'Pad See You',
            descr: 'Stir- fried flat noodles with egg, basil, Brussels sprouts, and caramelized sauce',
            price: '$18.95',
        },
        {
            title: 'Pho Bo',
            descr: 'Fresh wide flat noodles, beef brisket, cilantro, green onions; served in a slow simmered rich broth',
            price: '$19.95',
        },
    ];

    const vegetables = [
        {
            title: 'Braised Wrinkled String Bean',
            descr: 'Quickly cooked with Sichuan preserved vegetables',
            price: '$15.50',
        },
        {
            title: 'Tofu with Mixed Vegetables',
            descr: 'Fried tofu and vegetables in ginger garlic sauce',
            price: '$16.50',
        },
        {
            title: 'Vegetable Hot Pot',
            descr: 'Cellophane noodles, Napa cabbage, scallions, onions, carrots, and tofu',
            price: '$17.50',
        },
    ];

    const desserts = [
        {
            title: 'Banh Mi',
            descr: 'Traditional rice cakes with coconut milk and fruits',
            price: '$11.50',
        },
        {
            title: 'Che Ba Mau',
            descr: 'Vietnamese shaved ice dessert with a variety of toppings',
            price: '$12.25',
        },
        {
            title: 'Bap Xao',
            descr: 'Fried bananas in batter with honey sauce and vanilla ice cream',
            price: '$12.50',
        },
    ];

    return (
        <section className='max-w-7xl m-auto p-6'>
            <div className='flex items-center justify-between'>
                <Link href='/'>
                    <Image
                        className='mt-6'
                        src='/logo.png'
                        width={80}
                        height={70}
                        alt='logo'
                    />
                </Link>
                <Button
                    variant='secondary'
                    size='sm'>
                    <Link href='/#reservation'>Book a table</Link>
                </Button>
            </div>
            <h1 className='text-dark/90 uppercase !font-thin py-14 !text-5xl text-center before:content-["~"] after:content-["~"]'>
                Menu
            </h1>
            <h2 className='text-dark/90 uppercase !text-2xl text-center p-2'>
                APPETIZERS
            </h2>
            <div className='text-dark/30 border w-24 m-auto'></div>
            <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-x-20 gap-y-12 p-6'>
                {appetizers.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='flex flex-col justify-between gap-1'>
                            <h3 className='font-poppins font-semibold text-center text-base text-dark mb-2'>
                                {item.title}
                            </h3>
                            <p className='text-dark font-light text-sm mb-2'>
                                {item.descr}
                            </p>
                            <p className='text-dark text-center'>
                                {item.price}
                            </p>
                        </div>
                    );
                })}
            </div>
            <h2 className='text-dark/90 uppercase !text-2xl text-center p-2 mt-16'>
                SALAD & SOUP
            </h2>
            <div className='text-dark/30 border w-24 m-auto'></div>
            <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-x-20 gap-y-12 p-6'>
                {salad_soup.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='flex flex-col justify-between gap-1'>
                            <h3 className='font-poppins font-semibold text-center text-base text-dark mb-2'>
                                {item.title}
                            </h3>
                            <p className='text-dark font-light text-sm mb-2'>
                                {item.descr}
                            </p>
                            <p className='text-dark text-center'>
                                {item.price}
                            </p>
                        </div>
                    );
                })}
            </div>
            <h2 className='text-dark/90 uppercase !text-2xl text-center p-2 mt-16'>
                FRIED RICE & NOODLES
            </h2>
            <div className='text-dark/30 border w-24 m-auto'></div>
            <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-x-20 gap-y-12 p-6'>
                {rice_noodles.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='flex flex-col justify-between gap-1'>
                            <h3 className='font-poppins font-semibold text-center text-base text-dark'>
                                {item.title}
                            </h3>
                            <p className='text-dark font-light text-sm'>
                                {item.descr}
                            </p>
                            <p className='text-dark text-center'>
                                {item.price}
                            </p>
                        </div>
                    );
                })}
            </div>
            <h2 className='text-dark/90 uppercase !text-2xl text-center p-2 mt-16'>
                VEGETABLES
            </h2>
            <div className='text-dark/30 border w-24 m-auto'></div>
            <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-x-20 gap-y-12 p-6'>
                {vegetables.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='flex flex-col justify-between gap-1'>
                            <h3 className='font-poppins font-semibold text-center text-base text-dark'>
                                {item.title}
                            </h3>
                            <p className='text-dark font-light text-sm'>
                                {item.descr}
                            </p>
                            <p className='text-dark text-center'>
                                {item.price}
                            </p>
                        </div>
                    );
                })}
            </div>
            <h2 className='text-dark/90 uppercase !text-2xl text-center p-2 mt-16'>
                DESSERTS
            </h2>
            <div className='text-dark/30 border w-24 m-auto'></div>
            <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-x-20 gap-y-12 p-6'>
                {desserts.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className='flex flex-col justify-between gap-1'>
                            <h3 className='font-poppins font-semibold text-center text-base text-dark'>
                                {item.title}
                            </h3>
                            <p className='text-dark font-light text-sm'>
                                {item.descr}
                            </p>
                            <p className='text-dark text-center'>
                                {item.price}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div className='mt-6 border-t border-dark/10'>
                <p className='text-dark/70 text-center text-sm mt-4'>
                    Copyright &copy; ChiFu 2024
                </p>
            </div>
            
        </section>
    );
}
