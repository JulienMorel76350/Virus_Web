import stripe from 'stripe';
import Payment from '../models/payment.js';

const stripeApi = stripe('sk_test_51MP4JIDouJcaqTebvs7JBZQetAWVyGdP1vJUQZSbQpAhXFnnYMLDgnNWobC82UW6eluRtVpoWUek1pqfjShSSgQo00xtqqT251');

const PaymentController = {
  async getPayments(req, res, next) {
    try {
      // Récupérer tous les paiements depuis l'API Stripe
      const charges = await stripeApi.charges.list({ limit: 100 });

      // Pour chaque paiement, vérifier s'il n'existe pas déjà dans la base de données
      await Promise.all(charges.data.map(async (charge) => {
        const existingPayment = await Payment.findOne({ chargeId: charge.id });
        if (!existingPayment) {
          // Si le paiement n'existe pas déjà dans la base de données, l'enregistrer
          const payment = new Payment({
            chargeId: charge.id,
            amount: charge.amount / 100,
            currency: charge.currency,
            customerId: charge.customer,
          });
          await payment.save();
          console.log(`Le paiement Stripe avec l'ID ${charge.id} a été enregistré dans la base de données.`);
        } else {
          console.log(`Le paiement Stripe avec l'ID ${charge.id} existe déjà dans la base de données.`);
        }
      }));

      res.status(200).send({ message: 'Les paiements ont été récupérés et enregistrés avec succès.' });
    } catch (err) {
      console.error('Erreur lors de la récupération et de l\'enregistrement des paiements :', err);
      res.status(500).send({ message: 'Une erreur est survenue lors de la récupération et de l\'enregistrement des paiements.' });
    }
  },
};

export default PaymentController;