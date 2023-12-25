import { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

import Link from 'next/link';
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
    const [date, setDate] = useState();
    return (
        <form className='flex flex-col gap-y-10'>
            <div className='grid gap-7'>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                    <div>
                        <Label htmlFor='firstname'>first name</Label>
                        <Input id='rirstname' type='text'></Input>
                    </div>
                    <div>
                        <Label htmlFor='lastname'>last name</Label>
                        <Input id='lastname' type='text'></Input>
                    </div>
                </div>

                <div className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
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
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <Label>person</Label>
                    <Select>
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
