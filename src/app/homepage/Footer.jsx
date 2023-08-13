import React from "react";

export default function Footer() {
  return (
    <div className="footer-root">
      <div className="footer-main">
        <div className="footer-logo">lOGO</div>
        <div className="footer-about">
          <div className="list">
            <div className="list-boldtext">Company</div>
            <div>About Us</div>
            <div>Support</div>
            <div>Blog</div>
            <div>Login</div>
            <div>Signup</div>
            <div>Contact Us</div>
          </div>
          <div className="list">
            <div className="list-boldtext">Programs</div>
            <div>Affiliate Program</div>
            <div>Ambassador Program</div>
            <div>Partnership Program</div>
          </div>
          <div className="list">
            <div className="list-boldtext">Policy</div>
            <div>Legal</div>
            <div>DMCA</div>
            <div>USC 2257</div>
            <div>Privacy Policy</div>
            <div>Terms and Conditions</div>
          </div>
        </div>
        <div>
          <div className="list-boldtext followus">Follow Us</div>
          <div className="spritesroot">
            <div className="sprites">
              <img src="./images/footer/Frame.svg" alt="" />
            </div>
            <div className="sprites">
              <img src="./images/footer/Frame (1).svg" alt="" />
            </div>
            <div className="sprites">
              <img src="./images/footer/Frame (2).svg" alt="" />
            </div>
            <div className="sprites">
              <img src="./images/footer/icons8-youtube (2) 1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
