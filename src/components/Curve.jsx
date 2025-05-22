import React from "react";
import "../styles/Curve.css";

export default function Curve({ curve, curvex2 }) {
  const curvePosition = curve === 1 ? "curve-top" : "curve";
  const curveX2 = curvex2 === 1 ? "curve-x2" : "";

  return (
    <div className={`${curvePosition} ${curveX2}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,64L80,101.3C160,139,320,213,480,213.3C640,213,800,139,960,128C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
