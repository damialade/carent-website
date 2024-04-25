import * as React from "react";

const HeroImage = (props: any) => (
  <svg
    width={1058}
    height={537}
    viewBox="0 0 1058 537"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M63.8051 92.6653C36.7992 52.8245 65.3392 -1 113.47 -1H1058V537H545.278C432.525 537 327.106 481.103 263.841 387.771L63.8051 92.6653Z"
      fill="#F9F8FF"
    />
    <path
      d="M63.8051 92.6653C36.7992 52.8245 65.3392 -1 113.47 -1H1058V537H545.278C432.525 537 327.106 481.103 263.841 387.771L63.8051 92.6653Z"
      fill="url(#paint0_linear_47_102999)"
    />
    <mask
      id="mask0_47_102999"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={53}
      y={-1}
      width={1005}
      height={538}
    >
      <path
        d="M63.8051 92.6653C36.7992 52.8245 65.3392 -1 113.47 -1H1058V537H545.278C432.525 537 327.106 481.103 263.841 387.771L63.8051 92.6653Z"
        fill="#F9F8FF"
      />
    </mask>
    <g mask="url(#mask0_47_102999)">
      <ellipse
        cx={266.822}
        cy={276.003}
        rx={266.822}
        ry={276.003}
        transform="matrix(0.920144 -0.39158 0.361103 0.932526 289.291 -74.0449)"
        fill="url(#paint1_linear_47_102999)"
        fillOpacity={0.44}
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <ellipse
        cx={214.817}
        cy={208.587}
        rx={214.817}
        ry={208.587}
        transform="matrix(0.244077 -0.969756 0.959148 0.282903 639.869 736.98)"
        fill="url(#paint2_linear_47_102999)"
        fillOpacity={0.42}
        style={{
          mixBlendMode: "multiply",
        }}
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_47_102999"
        x1={223.058}
        y1={-1.00003}
        x2={1063.42}
        y2={528.394}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1BB652" />
        <stop offset={1} stopColor="#79F2A4" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_47_102999"
        x1={266.822}
        y1={0}
        x2={266.822}
        y2={552.006}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1BB652" />
        <stop offset={1} stopColor="#FFF8F0" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint2_linear_47_102999"
        x1={214.817}
        y1={0}
        x2={214.817}
        y2={417.174}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1BB652" />
        <stop offset={1} stopColor="#FFF8F0" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default HeroImage;
