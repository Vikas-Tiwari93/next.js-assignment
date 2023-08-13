import React from "react";
import Button1 from "../components/Button1";

export default function Nav() {
  return (
    <nav id="nav">
      <div id="logo">logo</div>
      <div id="right-nav">
        <div id="mid-nav">
          <div className="midnav-elm">Home</div>
          <div className="midnav-elm">About Us</div>
          <div className="midnav-elm">Our Blog</div>
          <div className="midnav-elm">Support</div>
          <div className="midnav-elm">Affiliate</div>
          <div className="midnav-elm">Programs</div>
        </div>
        <div id="sign-nav">
          <div className="login">Login</div>
          <Button1 label={"Sign up"} width={"161px"} />
        </div>
        <div className="nav-burger">
          <img src="./images/Burger menu.svg" alt="" />
        </div>
      </div>
    </nav>
  );
}
