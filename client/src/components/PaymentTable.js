import React from "react";

function PaymentTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Montant</th>
          <th>Date</th>
          <th>ID Stripe</th>
        </tr>
      </thead>
      <tbody>
        {props.payments.map((payment) => (
          <tr key={payment.stripeId}>
            <td>{payment.amount}</td>
            <td>{payment.date.toLocaleString()}</td>
            <td>{payment.stripeId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PaymentTable;
