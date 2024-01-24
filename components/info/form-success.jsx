import { CheckCircledIcon } from '@radix-ui/react-icons';

export const FormSuccess = ({ message }) => {
    if (!message) return null;

    return (
        <div className='border px-4 py-2 flex items-center gap-x-2 text-base text-success'>
            <CheckCircledIcon className='h-5 w-5' />
            <p className='text-success'>{message}</p>
        </div>
    );
};
