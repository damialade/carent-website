import React from "react";

const Billing = (props: any) => {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={64} height={64} rx={12} fill="#1BB652" {...props} />
      <path
        d="M33.1875 38.2066H34.2167C35.2458 38.2066 36.1008 37.2883 36.1008 36.1799C36.1008 34.8024 35.61 34.5333 34.8025 34.2483L33.2033 33.6941V38.2066H33.1875Z"
        fill="white"
      />
      <path
        d="M31.9525 16.0083C23.2125 16.04 16.135 23.1492 16.1667 31.8892C16.1983 40.6292 23.3075 47.7067 32.0475 47.675C40.7875 47.6433 47.865 40.5342 47.8333 31.7942C47.8017 23.0542 40.6925 15.9925 31.9525 16.0083ZM35.5783 32C36.8133 32.4275 38.4758 33.3458 38.4758 36.18C38.4758 38.6183 36.56 40.5817 34.2167 40.5817H33.1875V41.5C33.1875 42.1492 32.6492 42.6875 32 42.6875C31.3508 42.6875 30.8125 42.1492 30.8125 41.5V40.5817H30.2425C27.6458 40.5817 25.54 38.3967 25.54 35.705C25.54 35.0558 26.0783 34.5175 26.7275 34.5175C27.3767 34.5175 27.915 35.0558 27.915 35.705C27.915 37.0825 28.96 38.2067 30.2425 38.2067H30.8125V32.855L28.4217 32C27.1867 31.5725 25.5242 30.6542 25.5242 27.82C25.5242 25.3817 27.44 23.4183 29.7833 23.4183H30.8125V22.5C30.8125 21.8508 31.3508 21.3125 32 21.3125C32.6492 21.3125 33.1875 21.8508 33.1875 22.5V23.4183H33.7575C36.3542 23.4183 38.46 25.6033 38.46 28.295C38.46 28.9442 37.9217 29.4825 37.2725 29.4825C36.6233 29.4825 36.085 28.9442 36.085 28.295C36.085 26.9175 35.04 25.7933 33.7575 25.7933H33.1875V31.145L35.5783 32Z"
        fill="white"
      />
      <path
        d="M27.915 27.8357C27.915 29.2132 28.4058 29.4824 29.2133 29.7674L30.8125 30.3215V25.7932H29.7833C28.7541 25.7932 27.915 26.7115 27.915 27.8357Z"
        fill="white"
      />
    </svg>
  );
};

export default Billing;