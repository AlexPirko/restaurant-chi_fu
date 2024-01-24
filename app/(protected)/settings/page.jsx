'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition, useState } from 'react';
import { useSession } from 'next-auth/react';

import { Switch } from '@/components/ui/switch';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { settings } from '@/actions/settings';
import {
    Form,
    FormField,
    FormControl,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { UserRole } from '@prisma/client';
import { SettingsSchema } from '@/shcemas';
import { useCurrentUser } from '@/hooks/use-current-user';
import { FormError } from '@/components/info/form-error';
import { FormSuccess } from '@/components/info/form-success';
import { RoleGate } from '@/components/auth/role-gate';

const SettingsPage = () => {
    const user = useCurrentUser();

    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const { update } = useSession();
    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(SettingsSchema),
        defaultValues: {
            name: user?.name || undefined,
            phone: user?.phone || undefined,
            email: user?.email || undefined,
            role: user?.role || undefined,
            isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
            password: undefined,
            newPassword: undefined,
        },
    });

    const onSubmit = (values) => {
        startTransition(() => {
            settings(values)
                .then((data) => {
                    if (data.error) {
                        setError(data.error);
                    }

                    if (data.success) {
                        update();
                        setSuccess(data.success);
                    }
                })
                .catch(() => setError('Something went wrong!'));
        });
    };

    return (
        <Card className='sm:w-[600px] bg-secondary/80 border-0'>
            <CardHeader>
                <p className='text-2xl font-semibold text-center'>
                    ⚙️ Settings
                </p>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        className='space-y-8'
                        onSubmit={form.handleSubmit(onSubmit)}>
                        <div className='space-y-6'>
                            <FormField
                                control={form.control}
                                name='name'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder='John Doe'
                                                disabled={isPending}
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
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder='+380123456677'
                                                type='tel'
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {user?.isOAuth === false && (
                                <>
                                    <FormField
                                        control={form.control}
                                        name='email'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder='john.doe@example.com'
                                                        type='email'
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='password'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder='******'
                                                        type='password'
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='newPassword'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    New Password
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder='******'
                                                        type='password'
                                                        disabled={isPending}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}
                            <RoleGate>
                                <FormField
                                    control={form.control}
                                    name='role'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Role</FormLabel>
                                            <Select
                                                disabled={isPending}
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}>
                                                <FormControl className='h-14'>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder='Select a role' />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem
                                                        value={UserRole.ADMIN}>
                                                        Admin
                                                    </SelectItem>
                                                    <SelectItem
                                                        value={UserRole.USER}>
                                                        User
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </RoleGate>
                            {user?.isOAuth === false && (
                                <>
                                    <div className='text-white uppercase'>
                                        Two Factor Authentication
                                    </div>
                                    <FormField
                                        className='!pt-0'
                                        control={form.control}
                                        name='isTwoFactorEnabled'
                                        render={({ field }) => (
                                            <FormItem className='!mt-0 flex flex-row bg-white/15 items-center justify-between p-3 shadow-sm'>
                                                <FormDescription className='text-white text-base py-1.5'>
                                                    Enable two factor
                                                    authentication for your
                                                    account
                                                </FormDescription>

                                                <FormControl>
                                                    <Switch
                                                        className='!mt-0'
                                                        disabled={isPending}
                                                        checked={field.value}
                                                        onCheckedChange={
                                                            field.onChange
                                                        }
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button
                            size='sm'
                            disabled={isPending}
                            type='submit'>
                            Save
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default SettingsPage;
