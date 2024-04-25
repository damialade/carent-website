import React from "react";

const Schedule = (props: any) => {
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
        d="M39.5208 18.6367V16.1667C39.5208 15.5176 38.9825 14.9792 38.3333 14.9792C37.6841 14.9792 37.1458 15.5176 37.1458 16.1667V18.5417H26.8541V16.1667C26.8541 15.5176 26.3158 14.9792 25.6666 14.9792C25.0175 14.9792 24.4791 15.5176 24.4791 16.1667V18.6367C20.2041 19.0326 18.13 21.5817 17.8133 25.3659C17.7816 25.8251 18.1616 26.2051 18.605 26.2051H45.395C45.8541 26.2051 46.2341 25.8092 46.1866 25.3659C45.87 21.5817 43.7958 19.0326 39.5208 18.6367Z"
        fill="white"
      />
      <path
        d="M44.6667 28.5801H19.3333C18.4625 28.5801 17.75 29.2926 17.75 30.1634V39.9167C17.75 44.6667 20.125 47.8334 25.6667 47.8334H38.3333C43.875 47.8334 46.25 44.6667 46.25 39.9167V30.1634C46.25 29.2926 45.5375 28.5801 44.6667 28.5801ZM27.5825 41.8326C27.5033 41.8959 27.4242 41.9751 27.345 42.0226C27.25 42.0859 27.155 42.1334 27.06 42.1651C26.965 42.2126 26.87 42.2442 26.775 42.2601C26.6642 42.2759 26.5692 42.2917 26.4583 42.2917C26.2525 42.2917 26.0467 42.2442 25.8567 42.1651C25.6508 42.0859 25.4925 41.9751 25.3342 41.8326C25.0492 41.5317 24.875 41.1201 24.875 40.7084C24.875 40.2967 25.0492 39.8851 25.3342 39.5842C25.4925 39.4417 25.6508 39.3309 25.8567 39.2517C26.1417 39.1251 26.4583 39.0934 26.775 39.1567C26.87 39.1726 26.965 39.2042 27.06 39.2517C27.155 39.2834 27.25 39.3309 27.345 39.3942C27.4242 39.4576 27.5033 39.5209 27.5825 39.5842C27.8675 39.8851 28.0417 40.2967 28.0417 40.7084C28.0417 41.1201 27.8675 41.5317 27.5825 41.8326ZM27.5825 36.2909C27.2817 36.5759 26.87 36.7501 26.4583 36.7501C26.0467 36.7501 25.635 36.5759 25.3342 36.2909C25.0492 35.9901 24.875 35.5784 24.875 35.1667C24.875 34.7551 25.0492 34.3434 25.3342 34.0426C25.7775 33.5992 26.4742 33.4567 27.06 33.7101C27.2658 33.7892 27.44 33.9001 27.5825 34.0426C27.8675 34.3434 28.0417 34.7551 28.0417 35.1667C28.0417 35.5784 27.8675 35.9901 27.5825 36.2909ZM33.1242 41.8326C32.8233 42.1176 32.4117 42.2917 32 42.2917C31.5883 42.2917 31.1767 42.1176 30.8758 41.8326C30.5908 41.5317 30.4167 41.1201 30.4167 40.7084C30.4167 40.2967 30.5908 39.8851 30.8758 39.5842C31.4617 38.9984 32.5383 38.9984 33.1242 39.5842C33.4092 39.8851 33.5833 40.2967 33.5833 40.7084C33.5833 41.1201 33.4092 41.5317 33.1242 41.8326ZM33.1242 36.2909C33.045 36.3542 32.9658 36.4176 32.8867 36.4809C32.7917 36.5442 32.6967 36.5917 32.6017 36.6234C32.5067 36.6709 32.4117 36.7026 32.3167 36.7184C32.2058 36.7342 32.1108 36.7501 32 36.7501C31.5883 36.7501 31.1767 36.5759 30.8758 36.2909C30.5908 35.9901 30.4167 35.5784 30.4167 35.1667C30.4167 34.7551 30.5908 34.3434 30.8758 34.0426C31.0183 33.9001 31.1925 33.7892 31.3983 33.7101C31.9842 33.4567 32.6808 33.5992 33.1242 34.0426C33.4092 34.3434 33.5833 34.7551 33.5833 35.1667C33.5833 35.5784 33.4092 35.9901 33.1242 36.2909ZM38.6658 41.8326C38.365 42.1176 37.9533 42.2917 37.5417 42.2917C37.13 42.2917 36.7183 42.1176 36.4175 41.8326C36.1325 41.5317 35.9583 41.1201 35.9583 40.7084C35.9583 40.2967 36.1325 39.8851 36.4175 39.5842C37.0033 38.9984 38.08 38.9984 38.6658 39.5842C38.9508 39.8851 39.125 40.2967 39.125 40.7084C39.125 41.1201 38.9508 41.5317 38.6658 41.8326ZM38.6658 36.2909C38.5867 36.3542 38.5075 36.4176 38.4283 36.4809C38.3333 36.5442 38.2383 36.5917 38.1433 36.6234C38.0483 36.6709 37.9533 36.7026 37.8583 36.7184C37.7475 36.7342 37.6367 36.7501 37.5417 36.7501C37.13 36.7501 36.7183 36.5759 36.4175 36.2909C36.1325 35.9901 35.9583 35.5784 35.9583 35.1667C35.9583 34.7551 36.1325 34.3434 36.4175 34.0426C36.5758 33.9001 36.7342 33.7892 36.94 33.7101C37.225 33.5834 37.5417 33.5517 37.8583 33.6151C37.9533 33.6309 38.0483 33.6626 38.1433 33.7101C38.2383 33.7417 38.3333 33.7892 38.4283 33.8526C38.5075 33.9159 38.5867 33.9792 38.6658 34.0426C38.9508 34.3434 39.125 34.7551 39.125 35.1667C39.125 35.5784 38.9508 35.9901 38.6658 36.2909Z"
        fill="white"
      />
    </svg>
  );
};

export default Schedule;
