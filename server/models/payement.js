// Payment.js - Modèle de données MongoDB pour stocker les paiements Stripe

import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
  },
});

const PayementModel = mongoose.model("PaymentModel", PaymentSchema);
export default PayementModel
