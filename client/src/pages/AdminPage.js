import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/payments")
      .then((response) => {
        setData(response.data);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="wrap-admin">
      <h1>Données de la base de données</h1>
      <table>
        <thead className="col-head">
          <tr>
            <th>Montant</th>
            <th>Date</th>
            <th>ID Stripe</th>
          </tr>
        </thead>
        <tbody className="col-body">
          {data.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.amount / 100}</td>
              <td>{payment.createdAt}</td>
              <td>{payment.chargeId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
