import Signincard from "@/app/components/Signincard";
import React from "react";

export default function SigninBody() {
  return (
    <section id="signin-Body">
      <div className="svgtop-div">
        <svg
          className="svgtop"
          xmlns="http://www.w3.org/2000/svg"
          width="1059"
          height="328"
          viewBox="0 0 1059 328"
          fill="none"
        >
          <path
            d="M686.5 154.002C809.63 154.002 974.667 -7.66476 1059 -39.9981L-201.5 -39.998C-61.5 -39.998 21.5 154.002 101 154.002C221.5 164.502 223.5 263.502 340 319.002C456.5 374.502 471.5 154.002 686.5 154.002Z"
            fill="url(#paint0_linear_379_67)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_379_67"
              x1="1039.5"
              y1="-40.0389"
              x2="-119.74"
              y2="206.096"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7526F2" />
              <stop offset="1" stop-color="#C826F2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div id="creator-body">
        <div id="creator">A Creator’s Paradise</div>
        <div>Were Creativity Meets Success</div>
      </div>
      <Signincard />
      <div className="bottom-svgdiv">
        <svg
          className="svgbottom"
          xmlns="http://www.w3.org/2000/svg"
          width="1059"
          height="328"
          viewBox="0 0 1059 328"
          fill="none"
        >
          <path
            d="M686.5 154.002C809.63 154.002 974.667 -7.66476 1059 -39.9981L-201.5 -39.998C-61.5 -39.998 21.5 154.002 101 154.002C221.5 164.502 223.5 263.502 340 319.002C456.5 374.502 471.5 154.002 686.5 154.002Z"
            fill="url(#paint0_linear_379_67)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_379_67"
              x1="1039.5"
              y1="-40.0389"
              x2="-119.74"
              y2="206.096"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#7526F2" />
              <stop offset="1" stop-color="#C826F2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
