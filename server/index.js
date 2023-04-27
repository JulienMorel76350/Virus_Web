import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Stripe from "stripe";

const stripe = new Stripe("sk_test_51MP4JIDouJcaqTebvs7JBZQetAWVyGdP1vJUQZSbQpAhXFnnYMLDgnNWobC82UW6eluRtVpoWUek1pqfjShSSgQo00xtqqT251");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);

// Récupération des données de paiement depuis Stripe
app.get("/api/payments", async (req, res) => {
  try {
    const payments = await stripe.charges.list({limit: 100 });
    res.json(payments.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});