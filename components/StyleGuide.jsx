'use client';

import * as React from 'react';
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

const StyleGuide = () => {
    const [date, setDate] = React.useState();
    return (
        <>
            <div className='flex flex-col p-16'>
                <h1>Head1</h1>
                <h2>Head2</h2>
                <h3>Head3</h3>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo
                </p>
            </div>
            <div className='bg-dark p-24 flex flex-col gap-y-4'>
                <Link href='/'>Link</Link>
                <Button variant='default'>Lets Eat</Button>
                <Button variant='secondary'>Lets Eat</Button>
                <Button variant='outline'>Lets Eat</Button>
                <div>
                    <Label htmlFor='firstname'>First Name</Label>
                    <Input type='firstname' id='firstname' />
                </div>
                <div>
                    <Label htmlFor='lastname'>Last Name</Label>
                    <Input type='lastname' id='lastname' />
                </div>
                <div>
                    <Label>Date</Label>
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
                    <Select>
                        <SelectTrigger className='w-full'>
                            <SelectValue placeholder='Theme' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='light'>Light</SelectItem>
                            <SelectItem value='dark'>Dark</SelectItem>
                            <SelectItem value='system'>System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </>
    );
};

export default StyleGuide;
