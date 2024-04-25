import React from "react";

const Schedule = () => {
  return (
    <header className="mx-auto max-w-[80%] my-24 hidden md:block bg-btn-green text-app-white">
      <div className="flex justify-between">
        <div className=" px-16 text-[30px] font-semibold">
          <p className="text-app-white w-24 inline-block"> — </p>
          <h1>Try for free!</h1>
        </div>
        <ul className="bg-green-700 w-96 rounded-l-xl ">
          <li className="max-w-60 mx-auto text-center border bg-green-700 border-stone-100 shadow-slate-50 rounded-xl text-app-white text-xl font-bold px-8 py-4 m-5">
            Schedule a Demo
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Schedule;
