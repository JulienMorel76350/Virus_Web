import React from "react";

function PaymentRow(props) {
  const payment = props.payment;
  const dateObj = new Date(payment.created * 1000);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const seconds = dateObj.getSeconds();

  return (
    <tr>
      <td>{payment.amount / 100} €</td>
      <td>{`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`}</td>
      <td>{payment.id}</td>
    </tr>
  );
}

export default PaymentRow;
