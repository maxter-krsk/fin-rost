import React from "react";

const HorizontalArrow = ({ className = "" }) => (
  <svg
    className={`absolute hidden desk:block ${className}`}
    viewBox="0 0 634 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M634 5.77338L624 -0.000119879L624 11.5469L634 5.77338ZM0 5.77344L8.74228e-08 6.77344L625 6.77338L625 5.77338L625 4.77338L-8.74228e-08 4.77344L0 5.77344Z"
      fill="url(#paint0_linear_262_652)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_262_652"
        x1="4.37114e-08"
        y1="6.27344"
        x2="634"
        y2="6.27338"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DD9B1D" stopOpacity="0" />
        <stop offset="1" stopColor="#DD9B1D" />
      </linearGradient>
    </defs>
  </svg>
);

export default HorizontalArrow;
