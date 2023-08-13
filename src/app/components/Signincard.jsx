import React from "react";
import "./styles/style.signincard.css";
import Button1 from "./Button1";
import Button2 from "./Button2";

export default function Signincard() {
  return (
    <div id="signincardroot">
      <div id="top-signin">
        <div id="top-first">
          <div class="signin-img">
            <img src="" alt="" />
          </div>
          <div className="signin-text">Continue with Google</div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="451"
          height="2"
          viewBox="0 0 451 2"
          fill="none"
        >
          <path
            d="M1 1H450.167"
            stroke="#2D2D2D"
            stroke-width="1.12292"
            stroke-linecap="round"
          />
        </svg>

        <div id="top-third">
          <div className="name-div">
            <input type="text" placeholder="First Name*" className="names" />
            <input type="text" placeholder="Last Name*" className="names" />
          </div>
          <div className="name-div">
            {" "}
            <input
              type="text"
              placeholder="Email*"
              className="names "
              style={{ width: "100%" }}
            />
          </div>
          <div className="name-div">
            {" "}
            <input
              type="text"
              placeholder="Password*"
              className="names"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div id="bottom-signin">
        <div id="bottom-first">
          <div className="time">
            <span>(GMT+05:30) india standard Time - Calcutta </span>
            <img src="" alt="" />
          </div>
          <div className="signup-div">
            <Button1 label={"Signup as a user"} width={"100%"} />
          </div>
          <div className="policy">
            By signing up you agree to our Terms & Conditions and Privacy
            Policy. and confirm that you are at least 18 years old.
          </div>
        </div>
        <div id="bottom-second">
          <div className="or-line"><span className="bottom-secondline"></span> OR <span className="bottom-secondline"></span></div>
          <div><Button2 label={'Signup as a creator'}/> </div>
          <div style={{marginTop:'16px'}}>Already have an account? Login</div>
        </div>
      </div>
    </div>
  );
}
