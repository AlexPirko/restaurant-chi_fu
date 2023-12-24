import Head from '@/components/Head';
import Header from '@/components/Header';
import StyleGuide from '@/components/StyleGuide';

export default function Home() {
    return (
        <main className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'>
            <Header />
            <Head />
            {/* <StyleGuide /> */}
            <div className='h-[4000px]'></div>
        </main>
    );
}
