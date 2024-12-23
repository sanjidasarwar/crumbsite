import React from "react";
import { MessageCircleMore } from "lucide-react";

const PageIllustration = () => {
  return (
    <div className="cey85 czd2q czjaw cmhb9 codcr c7k83">
      <svg
        className="cem1n cimtg cgdju cgk3d c2s69 c83d2 cti3h"
        width="800"
        height="502"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="400"
          cy="102"
          r="400"
          fill="url(#heroglow_paint0_radial)"
          fillOpacity=".6"
        ></circle>
        <circle
          cx="209"
          cy="289"
          r="170"
          fill="url(#heroglow_paint1_radial)"
          fillOpacity=".4"
        ></circle>
        <defs>
          <radialGradient
            id="heroglow_paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90 149 251) scale(315.089)"
          >
            <stop stopColor="#3ABAB4"></stop>
            <stop offset="1" stopColor="#3ABAB4" stopOpacity=".01"></stop>
          </radialGradient>
          <radialGradient
            id="heroglow_paint1_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90 -40 249) scale(133.913)"
          >
            <stop stopColor="#667EEA"></stop>
            <stop offset="1" stopColor="#667EEA" stopOpacity=".01"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default PageIllustration;
