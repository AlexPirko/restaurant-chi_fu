import Head from '@/components/Head';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import Reservation from '@/components/Reservation';
import StyleGuide from '@/components/StyleGuide';

export default function Home() {
    return (
        <main className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'>
            <Header />
            <Head />
            <Menu />
            <Reservation />
            {/* <StyleGuide /> */}
            <div className='h-[4000px]'></div>
        </main>
    );
}
