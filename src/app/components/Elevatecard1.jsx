import React from "react";

export default function ({ url }) {
  return (
    <>
      <div className="cardtype1">
        <div className="cardtype1-top">Unlock Your ABC Earning Potential</div>
        <div className="cardtype1-mid">
          Are you ready to take your earning potential to the next level? With
          ABC, you have multiple avenues to monetize your content seamlessly.
          From subscriptions and tips to merchandise sales and NFTS, ABC helps
          you diversify your revenue streams and maximize your income.
        </div>
        <div className="cardtype1-bottom">
          <img src="./images/Frame 48101613 2.png" alt="" />
          <img
            className="outside"
            id="outside"
            src="./images/image 15.png"
            alt=""
          />
        </div>
      </div>
      {/* // another card */}
      <div className="cardtype1">
        <div className="cardtype1-top">
          Boost Your Sales with Built-in E-commerce
        </div>
        <div className="cardtype1-mid">
          Take control of your brand and boost your sales with ABC's built-in
          e-commerce functionality. Showcase and sell your exclusive products,
          whether it's merchandise, digital downloads, or personalized
          experiences. Integrate your store effortlessly and turn your creative
          ideas into profitable ventures.
        </div>
        <div className="cardtype1-bottom second">
          <div className="smallcards">
            <img src="./images/cardimg/image 16 (1).png" alt="" />
          </div>
          <div className="smallcards">
            <div className="smallcard-img">
              <img src="./images/cardimg/Rectangle 28766 (2).png" alt="" />
            </div>
            <div className="smallcard-title">Green modern bikini</div>
            <div className="smallcard-rating">
              <div>$100</div>
              <div>
                <img src="./images/cardimg/material-symbols_star.svg" alt="" />{" "}
                <span>4.3</span>
              </div>
            </div>
          </div>
          <div className="smallcards">
            <div className="smallcard-img">
              <img src="./images/cardimg/Rectangle 28766 (3).png" alt="" />
            </div>
            <div className="smallcard-title">Green modern bikini</div>
            <div className="smallcard-rating">
              <div>$100</div>
              <div>
                <img src="./images/cardimg/material-symbols_star.svg" alt="" />{" "}
                <span>4.3</span>
              </div>
            </div>
          </div>
          <div className="smallcards">
            <div className="smallcard-img">
              <img src="./images/cardimg/Rectangle 28832 (1).png" alt="" />
            </div>
            <div className="smallcard-title">Green modern bikini</div>
            <div className="smallcard-rating">
              <div>$100</div>
              <div>
                <img src="./images/cardimg/material-symbols_star.svg" alt="" />{" "}
                <span>4.3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
