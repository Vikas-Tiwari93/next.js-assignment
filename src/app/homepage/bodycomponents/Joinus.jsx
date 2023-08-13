import Button3 from "@/app/components/Button3";
import React from "react";

export default function Joinus() {
  return (
    <div className="joinus-root">
      <div className="join-radius">
        <div className="join-circleone"></div>
        <div className="join-circletwo"></div>
        <div className="text-main">
          <div className="main-top">
            <p>
              Don't miss out on ABC’s Incredible features and Opportunities.
            </p>
            Join us today and unlock your full potential as a creator
          </div>
          <div className="main-bottom">
            <Button3 label={"Join Now"} width={"17.375rem"} />
          </div>
        </div>
      </div>
    </div>
  );
}
