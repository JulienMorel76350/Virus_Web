import React, { useState, useEffect } from "react";
import axios from "axios";
import PaymentRow from "../components/PaymentRow";
function App() {
  const [downloadCount, setDownloadCount] = useState(0);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios
      .get("/api/downloads/count")
      .then((response) => {
        setDownloadCount(response.data.count);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("/api/payments")
      .then((response) => {
        setPayments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="wrap-admin">
      <h1>Données de la base de données</h1>
      <div className="download-count">
        Nombre de téléchargements : {downloadCount}
      </div>
      <div className="tbl-header">
        <table>
          <thead className="col-head">
            <tr>
              <th>Montant</th>
              <th>Date</th>
              <th>ID Stripe</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table>
          <tbody className="">
            {payments.map((payment) => (
              <PaymentRow key={payment.id} payment={payment} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
