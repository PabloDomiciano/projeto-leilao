import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
        <div className="layout">
          <main className="content">{children}</main>
        </div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
