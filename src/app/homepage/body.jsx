import React from "react";
import SigninBody from "./bodycomponents/SigninBody";
import Elevate from "./bodycomponents/Elevate";
import Joinus from "./bodycomponents/Joinus";
import Button3 from "../components/Button3";
import Footer from "./Footer";

export default function Body() {
  return (
    <div>
      <SigninBody />
      <Elevate />
      <Joinus />
      <section className="photosection"></section>
      <section className="earnnow">
        <div className="firstcircle circle">
          <div className="little-icons first-icon">
            <img src="./images/circleimg/Honeybee.png" alt="" />
          </div>
          <div className="little-icons second-icon">
            <img src="./images/circleimg/Cowboy Hat Face.png" alt="" />
          </div>
          <div className="little-icons third-icon">
            <img src="./images/circleimg/Wrapped Gift.png" alt="" />
          </div>
          <div className="little-icons forth-icon">
            <img src="./images/circleimg/Party Popper.png" alt="" />
          </div>
          <div className="little-icons fifth-icon">
            <img src="./images/circleimg/Fire.png" alt="" />
          </div>
          <div className="secondcircle circle">
            <div className="thirdcircle circle">
              <div className="forthcircle circle">
                <div className="fifthcircle circle">
                  <div className="earn-firsttext">
                    Ready to Cash in Your Connections? Join Our Affiliate
                    Program
                  </div>
                  <div className="earn-secondtext">
                    <span className="joinearn">Join now and get </span>
                    <span className="percent">7.5%</span>
                    <span className="joinearn">
                      commission on all creator referrals for the entire year.
                    </span>
                  </div>
                  <div className="earn-thirdtext">
                    <Button3 label={"Earn now"} width={"17.375rem"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="community">
        <div className="communitydown">
          <div className="community-text">
            <div className="communitytext-top">Join the ABC Community</div>
            <div className="communitytext-mid">
              Become part of a vibrant and supportive community of like-minded
              creators by joining ABC's exclusive platform. Collaborate, learn,
              and connect with fellow creators who share your passion for adult
              content creation.
            </div>
            <div>
              <Button3 label={"Learn More"} width={"17.375rem"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
