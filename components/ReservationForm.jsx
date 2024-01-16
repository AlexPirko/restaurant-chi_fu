import { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

const ReservationForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [personQty, setPersonQty] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const creationPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/orders', {
                method: 'POST',
                body: JSON.stringify({
                    fullName,
                    email,
                    phone,
                    date,
                    personQty,
                }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) resolve();
            else reject();
        });
        await toast.promise(
            creationPromise,
            {
                success:
                    'Your order has been received! Our manager will contact you shortly to confirm the details.',
                error: 'Error, please, try again',
            },
            {
                duration: 6000,
            },
        );
        setFullName('');
        setEmail('');
        setPhone('');
        setDate('');
        setPersonQty('');
    };

    return (
        <form
            className='flex flex-col gap-y-10'
            onSubmit={handleSubmit}>
            <div className='grid gap-7'>
                <div className='grid grid-cols-1 gap-[30px]'>
                    <div>
                        <Label htmlFor='fullname'>full name</Label>
                        <Input
                            id='fullname'
                            type='text'
                            value={fullName}
                            onChange={(e) =>
                                setFullName(e.target.value)
                            }></Input>
                    </div>
                    <div>
                        <Label htmlFor='phone'>phone number</Label>
                        <Input
                            id='phone'
                            type='tel'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}></Input>
                    </div>
                    <div>
                        <Label htmlFor='email'>email</Label>
                        <Input
                            id='email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}></Input>
                    </div>
                </div>

                <div className='grid grid-cols-1 xl:grid-cols-2 mt-4'>
                    <Label>date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={'outline'}
                                className={cn(
                                    'w-full justify-start text-left font-normal',
                                )}>
                                <CalendarIcon className='mr-2 h-4 w-4' />
                                {date ? (
                                    format(date, 'PPP')
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0'>
                            <Calendar
                                mode='single'
                                selected={date}
                                value={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <Label>person</Label>
                    <Select
                        value={personQty}
                        onValueChange={setPersonQty}>
                        <SelectTrigger className='w-full'>
                            <SelectValue placeholder='How many people?' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='1'>1</SelectItem>
                            <SelectItem value='2'>2</SelectItem>
                            <SelectItem value='3'>3</SelectItem>
                            <SelectItem value='4'>4</SelectItem>
                            <SelectItem value='5'>5</SelectItem>
                            <SelectItem value='6'>6</SelectItem>
                            <SelectItem value='7'>7</SelectItem>
                            <SelectItem value='8'>8</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Button className='uppercase w-full xl:w-auto xl:self-end'>
                book a table
            </Button>
        </form>
    );
};

export default ReservationForm;
