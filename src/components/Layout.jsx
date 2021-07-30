import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../components/styles/Footer.css";

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <div className="border-top footer">
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;
