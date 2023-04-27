import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import Navbar from "./components/nav";

export default function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
      </Routes>
    </Router>
  );
}
