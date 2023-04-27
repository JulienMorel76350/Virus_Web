import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import Stripe from "stripe";
import mongoose from "mongoose";
import downloadRoutes from "./routes/download.js";

const stripe = new Stripe("sk_test_51MP4JIDouJcaqTebvs7JBZQetAWVyGdP1vJUQZSbQpAhXFnnYMLDgnNWobC82UW6eluRtVpoWUek1pqfjShSSgQo00xtqqT251");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://julienmorel76350:oRBHGfn2jekPkRPB@clustervirus.8tx7bpe.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )

  .catch((error) => console.log(`${error} did not connect`));
// Récupération des données de paiement depuis Stripe
app.get("/api/payments", async (req, res) => {
  try {
    const payments = await stripe.charges.list({ limit: 100 });
    res.json(payments.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.use("/api/downloads", downloadRoutes);