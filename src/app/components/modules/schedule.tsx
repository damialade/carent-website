import React from "react";

const Schedule = () => {
  return (
    <header className="mx-auto max-w-[80%] my-24 block bg-btn-green text-app-white">
      <div className="md:flex md:justify-between">
        <div className=" px-16 text-[20px] md:text-[24px] lg:text-[30px] font-semibold">
          <p className="text-app-white w-24 inline-block"> — </p>
          <h1>Try for free!</h1>
        </div>
        <ul className="md:bg-green-700 md:w-96 rounded-l-xl py-3 md:py-0 ">
          <li className="max-w-60 mx-auto text-center border bg-green-700 border-stone-100 shadow-slate-50 rounded-xl text-app-white md:text-lg lg:text-xl font-bold px-8 py-4 m-5">
            Schedule a Demo
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Schedule;
