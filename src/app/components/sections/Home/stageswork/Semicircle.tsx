import React from "react";

const Semicircle = ({ className = "" }) => (
  <svg
    className={`desk:block absolute hidden ${className}`}
    viewBox="0 0 710 185"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="700"
      height="185"
      rx="100"
      stroke="url(#paint0_linear_262_651)"
      strokeWidth="2"
    />
    <defs>
      <linearGradient
        id="paint0_linear_262_651"
        x1="107.5"
        y1="92.5"
        x2="710"
        y2="92.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DD9B1D" stopOpacity="0" />
        <stop offset="1" stopColor="#DD9B1D" />
      </linearGradient>
    </defs>
  </svg>
);

export default Semicircle;
