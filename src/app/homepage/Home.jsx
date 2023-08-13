import React from "react";
import Nav from "./Nav";
import "../homepage/styles/style.nav.css";
import "../homepage/styles/style.body.css";
import "../homepage/styles/style.footer.css";
import Body from "./body";
import Footer from "./Footer";
export default function Homepage() {
  return (
    <div className="home">
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}
