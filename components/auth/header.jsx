export const Header = ({ label }) => {
    return (
        <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
            <h1 className='text-3xl font-semibold text-white'>
                🔐 Auth
            </h1>
            <p className='text-muted-foreground text-sm text-white/90'>{label}</p>
        </div>
    );
};
