'use client';

import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

const MapContainer = dynamic(
    () => import('react-leaflet').then((module) => module.MapContainer),
    {
        ssr: true,
    },
);
const TileLayer = dynamic(
    () => import('react-leaflet').then((module) => module.TileLayer),
    {
        ssr: true,
    },
);
const Marker = dynamic(
    () => import('react-leaflet').then((module) => module.Marker),
    {
        ssr: true,
    },
);
const Popup = dynamic(
    () => import('react-leaflet').then((module) => module.Popup),
    {
        ssr: false,
    },
);
import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const markers = [
    {
        position: [46.38098108171221, 30.70677046131192],
        title: 'Location 1',
        subtitle: 'Gemchugna St.,7',
        image: '/map/1',
    },
    {
        position: [46.47907306526468, 30.73787603531466],
        title: 'Location 2',
        subtitle: 'Katerynynska St, 34',
        image: '/map/2',
    },
];

const customIcon = new Icon({
    iconUrl: '/pin-solid.svg',
    iconSize: [40, 40],
});

const Map = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });

    return (
        <motion.section
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.4 }}
            className='relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20'
            id='contact'>
            <MapContainer
                center={[46.45, 30.73]}
                zoom={isMobile ? 10 : 12}
                scrollWheelZoom={false}
                className={`${isMobile ? 'h-[300px]' : 'h-[900px]'} z-10`}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
                />

                {markers.map((marker, index) => {
                    return (
                        <Marker
                            key={index}
                            position={marker.position}
                            icon={customIcon}>
                            <Popup className='text-base font-semibold'>
                                {marker.subtitle}
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </motion.section>
    );
};

export default Map;
