import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const handleDownload = () => {
    if (!isDownloading) {
      setIsDownloading(true);
      axios.get("/api/downloads/").then((response) => {
        setIsDownloading(false);
        console.log(response);
      });
    }
  };

  return (
    <div>
      <h1>Product Page</h1>
      <a href="/creative-Cloud_installer.exe" onClick={handleDownload} download>
        Télécharger
      </a>
    </div>
  );
};

export default Home;
