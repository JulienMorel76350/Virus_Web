import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Données de la base de données</h1>
      <table>
        <thead>
          <tr>
            <th>Montant</th>
            <th>Date</th>
            <th>ID Stripe</th>
          </tr>
        </thead>
        <tbody>
          {data.map((payment) => (
            <tr key={payment.stripeId}>
              <td>{payment.amount}</td>
              <td>{payment.date.toLocaleString()}</td>
              <td>{payment.stripeId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
