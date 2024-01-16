import { model, models, Schema } from 'mongoose';

const OrderSchema = new Schema(
    {
        name: { type: String },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        date: { type: Date },
        personQty: { type: Number },
    },
    { timestamps: true },
);

export const Order = models?.Order || model('Order', OrderSchema);
