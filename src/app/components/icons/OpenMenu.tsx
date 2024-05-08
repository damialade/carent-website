import * as React from "react";
const OpenMenu = (props: any) => (
  <svg
    width={58}
    height={58}
    viewBox="0 0 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_1167_453)">
      <rect x={9} y={5} width={40} height={40} rx={20} fill="#1BB652" />
      <path
        d="M37 19H22"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37 25H22"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37 31H22"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x={9.5} y={5.5} width={39} height={39} rx={19.5} stroke="#1BB652" />
    </g>
    <defs>
      <filter
        id="filter0_d_1167_453"
        x={0}
        y={0}
        width={58}
        height={58}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={4.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.839216 0 0 0 0 0.839216 0 0 0 0 0.839216 0 0 0 0.22 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1167_453"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1167_453"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1167_453"
        x1={29}
        y1={5}
        x2={29}
        y2={45}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFFFFF" />
        <stop offset={1} stopColor="#FFFFFF" />
      </linearGradient>
    </defs>
  </svg>
);
export default OpenMenu;
