'use server';

import { db } from '@/lib/db';

export const getOrders = async () => {
    try {
        const orders = await db.orders.findMany({
            take: 6,
            skip: 1,
            // cursor: {
            //     id: myOldCursor,
            // },
            orderBy: {
                date: 'desc',
            },
        });
        return orders;
    } catch {
        return null;
    }
};
