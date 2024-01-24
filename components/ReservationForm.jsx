'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar as CalendarIcon } from 'lucide-react';
// import toast from 'react-hot-toast';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { useCurrentUser } from '@/hooks/use-current-user';
import { Button } from './ui/button';
import { Input } from '@/components/ui/input';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { orders } from '@/actions/orders';
import { OrderSchema } from '@/shcemas';
import { FormError } from './info/form-error';
import { FormSuccess } from './info/form-success';

const ReservationForm = () => {
    const user = useCurrentUser();

    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(OrderSchema),
        defaultValues: {
            fullName: user?.name || '',
            phone: user?.phone || '',
            email: user?.email || '',
            date: '',
            personQty: '',
        },
    });

    const onSubmit = (values) => {
        setError('');
        setSuccess('');

        startTransition(() => {
            orders(values).then((data) => {
                setError(data.error);
                setSuccess(data.success);
            });
        });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-6'>
                <div className='space-y-6'>
                    <FormField
                        control={form.control}
                        name='fullName'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder='John Doe'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='phone'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder='+38(123)1234567'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        placeholder='john.doe@example.com'
                                        type='email'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='date'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Date</FormLabel>
                                <FormControl>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={'outline'}
                                                className={cn(
                                                    'w-full justify-start text-left font-normal',
                                                )}>
                                                <CalendarIcon className='mr-2 h-4 w-4' />
                                                {field.value ? (
                                                    format(field.value, 'PPP')
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className='w-auto p-0'>
                                            <Calendar
                                                mode='single'
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='personQty'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Person</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        disabled={isPending}>
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
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button
                    disabled={isPending}
                    type='submit'
                    className='uppercase w-full xl:w-auto xl:self-end'>
                    book a table
                </Button>
            </form>
        </Form>
    );
};

export default ReservationForm;
