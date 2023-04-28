import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to={"/admin"}>
        <img className="header" src="navbar.png"></img>
      </Link>
    </>
  );
};

export default Navbar;
