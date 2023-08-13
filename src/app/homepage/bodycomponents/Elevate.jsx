import Elevatecard1 from "@/app/components/Elevatecard1";

import Elevatecardbottom from "@/app/components/Elevatecardbottom";
import React from "react";

export default function Elevate() {
  return (
    <div id="elevate">
      <div id="elevate-head">Elevate Your Craft</div>
      <div id="elevate-cardsroot">
        <div className="elevateone" style={{}}>
          <Elevatecard1 />
        </div>
        <div className="elevatetwo" style={{}}>
          <Elevatecardbottom />
        </div>
      </div>
      <div></div>
    </div>
  );
}
