import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const Layout = ({ children }) => (
  <>
    <div style={{ height: "auto", overflow: "auto" }}>
      <div className="fixed-top">
        <Header />
        <Nav />
      </div>
      {children}
      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>
  </>
);
export default Layout;
