import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import PageContent from "./PageContent";

const DefaultPage = () => {
  return (
    <>
      <NavBar />
      <PageContent />
      <Footer />
    </>
  );
};

export default DefaultPage;
