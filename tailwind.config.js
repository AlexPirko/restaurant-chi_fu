/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
        './src/**/*.{js,jsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '15px',
            screens: {
                sm: '540px',
                md: '768px',
                lg: '969px',
                xl: '1200px',
            },
        },
        extend: {
            colors: {
                light: '#f5f5f5',
                white: '#fff',
                gray: '#888888',
                outline: '#f1f1f1',
                dark: { DEFAULT: '#273029', heavy: '#1b211c' },
                primary: {
                    DEFAULT: '#539592',
                    hover: '#40807c',
                    dark: '#2d5453',
                },
                secondary: { DEFAULT: '#f09443', hover: '#da863c' },
                red: '#f54c4c',
                success: '#4cf582',
            },
            fontFamily: {
                lora: ['var(--font-lora)', 'sana-serif'],
                poppins: ['var(--font-poppins)', 'sana-serif'],
            },
            backgroundImage: {
                head: 'url(/head/bg.png)',
                menu: 'url(/menu/bg.png)',
                reservation: 'url(/reservation/bg.jpg)',
                footer: 'url(/footer/bg.png)',
            },
            boxShadow: {
                primary: '25px 25px 50px -12px rgb(90 90 90 / 0.1)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
