import About from '@/components/About';
import Footer from '@/components/Footer';
import Head from '@/components/Head';
import Header from '@/components/Header';
import Map from '@/components/Map';
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
            <About />
            <Map />
            <Footer />
            {/* <StyleGuide /> */}
        </main>
    );
}
