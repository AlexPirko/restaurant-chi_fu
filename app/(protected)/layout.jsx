import { Navbar } from './_components/navbar';

const ProtectedLayout = ({ children }) => {
    return (
        <div className='w-full min-h-full p-10 flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary to-primary-dark'>
            <Navbar />
            {children}
        </div>
    );
};

export default ProtectedLayout;
