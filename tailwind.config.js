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
                sm: '640px',
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
                primary: { DEFAULT: '#539592', hover: '#40807c' },
                secondary: { DEFAULT: '#f09443', hover: '#da863c' },
                red: '#ffa5a5',
            },
            fontFamily: {
                lora: ['var(--font-lora)', 'sana-serif'],
                poppins: ['var(--font-poppins)', 'sana-serif'],
            },
            backgroundImage: {
                head: 'url(/head/bg.png)',
                menu: 'url(/menu/bg.png)',
                reservation: 'url(/reservation/bg.png)',
                footer: 'url(/footer/bg.png)',
            },
            boxShadow: {
                primary: '40px 4px 40px 0px rgba(68, 68, 68, 0.25)',
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
