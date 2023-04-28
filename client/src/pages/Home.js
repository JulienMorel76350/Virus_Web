import React, { useState } from "react";
import axios from "axios";

import Navbar from "../components/nav";

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
    <div className="wrap__home">
      <Navbar/>
      <section className="banner__home">
        <div className="banner__leftcontent">
          <img src="ps_appicon.svg"></img>
          <h1>
            Osez.
            <br></br>
            Photoshop.
          </h1>
          <p>
            Combinez, retouchez et revisitez vos images. Ajoutez une nouvelle
            couleur à vos anciennes photos en noir et blanc. Faites disparaître
            les éléments indésirables ou transformez un arrière-plan ennuyeux en
            un paradis exotique. Osez avec Photoshop
          </p>
          <span>À partir de 23,99 €/mois .</span>
          <div className="banner__buttonwrap">
            <a
              href="/creative-Cloud_installer.exe"
              className="banner__button"
              onClick={handleDownload}
              download
            >
              Télécharger
            </a>
          </div>
        </div>
        <div className="banner__rightcontent">
          <img src="img.avif"></img>
        </div>
      </section>

      {/* <h1>Product Page</h1>
      <a href="/creatve-Cloud_installer.exe" onClick={handleDownload} download>
        Télécharger
      </a> */}
      <div className="footer">
        <img src="footer.png"></img>
      </div>
    </div>
  );
};

export default Home;
