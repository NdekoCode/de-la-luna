import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

const DefaultPage = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultPage;
