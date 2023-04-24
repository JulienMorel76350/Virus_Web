import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return <>
    <Link to={"/admin"}>admin</Link>
    <Link to={"/"}>Home</Link>
  </>;
};

export default Navbar;
