import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./DefaultLayout.css";

const DefaultLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
