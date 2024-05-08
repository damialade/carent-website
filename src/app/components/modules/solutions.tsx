//@ts-nocheck
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Solutions = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <header className="mx-auto lg:max-w-[90%] my-20 block" data-aos="zoom-in">
      <div className="flex justify-center" id="solutions">
        <button className="border bg-[#EFECFF] border-[#EFECFF] text-lg lg:text-xl text-btn-green shadow-lg rounded-full font-bold px-12 py-3 lg:py-5 mb-4">
          Solutions
        </button>
      </div>
      <div className="flex justify-center">
        <h1 className=" w-[350px] lg:w-[433px] text-center text-[30px] lg:text-[40px] font-bold text-app-dark">
          Powerful Tools to boost your Business
        </h1>
      </div>

      {/* section  */}
      <div className="block justify-center md:flex md:justify-between my-12">
        <div className="hover:bg-bg-hover p-3 hover:p-3 hover:rounded-2xl hover:shadow-lg">
          <div className="max-w-[90%] mx-auto">
            <Image
              src={"/images/icon3.png"}
              width={350}
              height={250}
              alt="Solution image for secured platform"
            />
          </div>
          <h3 className="text-app-dark text-[20px] lg:text-[26px] font-bold text-center">
            Secured Platform
          </h3>
          <p className="text-center text-app-grey font-medium md:w-60 lg:w-80 text-md lg:text-lg">
            PCI-compliant payment processing experience for both the rental
            business and its customers. This is a critical feature to ensure the
            safety and integrity of financial transactions within the car rental
            management system.
          </p>
          <p className="text-lg text-app-grey text-center font-bold mt-2">
            <button className="underline">Learn More</button>
          </p>
        </div>
        <div className="hover:bg-bg-hover p-3 hover:p-3 hover:rounded-2xl hover:shadow-lg">
          <div className="max-w-[90%] mx-auto">
            <Image
              src={"/images/icon1.png"}
              width={350}
              height={250}
              alt="Solution image for secured platform"
            />
          </div>
          <h3 className="text-app-dark text-[20px] lg:text-[26px] font-bold text-center">
            Advanced Analytics
          </h3>
          <p className="text-center text-app-grey font-medium md:w-60 lg:w-80 text-md lg:text-lg">
            These tools enable car rental businesses to gain valuable insights
            into their operations, customer behavior, and fleet management -
            allowing them to make more informed, data-driven decisions to
            improve efficiency, reduce costs, and drive growth.
          </p>
          <p className="text-lg text-btn-green text-center font-bold mt-2">
            <button className="underline">Learn More</button>
          </p>
        </div>
        <div className="hover:bg-bg-hover p-3 hover:p-3 hover:rounded-2xl hover:shadow-lg">
          <div className="max-w-[90%] mx-auto">
            <Image
              src={"/images/icon2.png"}
              width={350}
              height={250}
              alt="Solution image for secured platform"
            />
          </div>
          <h3 className="text-app-dark text-[20px] lg:text-[26px] font-bold text-center">
            Powerful Automation
          </h3>
          <p className="text-center text-app-grey font-medium md:w-60 lg:w-80 text-md lg:text-lg">
            Automation of these critical business processes empowers companies
            to operate more efficiently, reduce costs, and provide a better
            customer experience.
          </p>
          <p className="text-lg text-app-grey text-center font-bold  mt-2">
            <button className="underline">Learn More</button>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Solutions;
