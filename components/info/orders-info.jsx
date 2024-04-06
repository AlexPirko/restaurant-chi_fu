import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { PulseLoader } from 'react-spinners';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { getOrders } from '@/data/orders';

export const OrdersInfo = ({ label }) => {
    const [orders, setOrders] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(true);

    useEffect(() => {
        setLoadingOrders(true);
        const updateViews = async () => {
            const updatedViews = await getOrders();
            setOrders(updatedViews);
            setLoadingOrders(false);
        };

        updateViews();
    }, []);

    return (
        <Card className='min-w-[600px] w-auto min-h-[600px] '>
            <CardHeader>
                <p className='text-2xl font-semibold text-center'>{label}</p>
            </CardHeader>
            <CardContent className='space-y-4'>
                {loadingOrders && <PulseLoader className='text-center' />}
                {orders?.length > 0 &&
                    orders.map((order, index) => (
                        <div
                            key={index}
                            className='grid grid-cols-12 gap-1 rounded-lg border p-3'>
                            <p className='truncate text-xs max-w-[180px] col-span-2  font-mono p-1 bg-slate-100 rounded-md'>
                                {format(order?.date.toString(), 'P')}
                            </p>
                            <p className='truncate text-xs max-w-[180px] col-span-3 font-mono p-1 bg-slate-100 rounded-md'>
                                {order.fullName}
                            </p>
                            <p className='truncate text-xs max-w-[180px] col-span-3  font-mono p-1 bg-slate-100 rounded-md'>
                                {order.phone}
                            </p>
                            <p className='truncate text-xs max-w-[180px] col-span-3  font-mono p-1 bg-slate-100 rounded-md'>
                                {order.email}
                            </p>
                            <p className='truncate text-xs max-w-[180px] col-span-1 text-center font-mono p-1 bg-slate-100 rounded-md'>
                                {order?.personQty}
                            </p>
                        </div>
                    ))}
            </CardContent>
        </Card>
    );
};
