'use server';
import { OrderSchema } from '@/shcemas';

import { db } from '@/lib/db';

export const orders = async (values) => {
    const validatedFields = OrderSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' };
    }

    const { fullName, phone, email, date, personQty } = validatedFields.data;

    await db.orders.create({
        data: {
            fullName,
            phone,
            email,
            date,
            personQty,
        },
    });

    return {
        success: 'Order sent! Our manager will call you to clarify the details',
    };
};
