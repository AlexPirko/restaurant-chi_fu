import { Order } from '@/models/Order';
import mongoose from 'mongoose';

export async function POST(req) {
    const body = await req.json();
    mongoose.connect(process.env.MONGO_URL);
    const order = await Order.create(body);
    return Response.json(order);
}
