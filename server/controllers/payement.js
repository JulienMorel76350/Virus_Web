// payment.js - API RESTful pour récupérer les paiements Stripe
import express from "express";
import Stripe from "stripe";
// const express = require("express");
const router = express.Router();
import PayementModel from "../models/payement.js";
const stripe = new Stripe(
  "sk_test_51MP4JIDouJcaqTebvs7JBZQetAWVyGdP1vJUQZSbQpAhXFnnYMLDgnNWobC82UW6eluRtVpoWUek1pqfjShSSgQo00xtqqT251"
);
export const getPayements = async (req, res) => {
  try {
    const stripePayments = await stripe.charges.list({ limit: 10 });
    const payments = stripePayments.data.map((charge) => ({
      amount: charge.amount / 100,
      date: new Date(charge.created * 1000),
      stripeId: charge.id,
    }));
    const savedPayments = await PayementModel.insertMany(payments);
    res.json(savedPayments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
