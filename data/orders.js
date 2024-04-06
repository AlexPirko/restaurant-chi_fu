'use server';

import { db } from '@/lib/db';

export const getOrders = async () => {
    try {
        const orders = await db.orders.findMany({
            orderBy: {
                date: 'desc',
            },
        });
        return orders;
    } catch {
        return null;
    }
};
