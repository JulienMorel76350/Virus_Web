import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  chargeId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  customerId: { type: String, required: false },
}, { timestamps: true });

const Payment = mongoose.model('Payment', PaymentSchema);

export default Payment;