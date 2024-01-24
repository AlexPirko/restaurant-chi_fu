import Header from '@/components/Header';

const AuthLayout = ({ children }) => {
    return (
        <div className='bg-head flex items-center justify-center h-full'>
            <Header />
            {children}
        </div>
    );
};

export default AuthLayout;
