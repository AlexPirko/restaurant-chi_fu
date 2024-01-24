'use server';
import bcrypt from 'bcryptjs';

import { db } from '@/lib/db';

import { getUserByEmail } from '@/data/user';
import { RegisterSchema } from '@/shcemas';
import { sendVerificationEmail } from '@/lib/mail';
import { generateVerificationToken } from '@/lib/tokens';

export const register = async (values) => {
    const validatedFields = RegisterSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' };
    }

    const { name, phone, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: 'Email already in use!' };
    }

    await db.user.create({
        data: {
            name,
            phone,
            email,
            password: hashedPassword,
        },
    });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token,
    );

    return { success: 'Confirmation email sent!' };
};
