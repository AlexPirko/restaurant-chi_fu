/** @type {import('next').NextConfig} */

const nextConfig = {
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'chifu.pirko.site',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
