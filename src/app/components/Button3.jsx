import React from "react";

export default function Button3({ label, width }) {
  return (
    <button className="restbutton" style={{ width: width }}>
      {label}
    </button>
  );
}
