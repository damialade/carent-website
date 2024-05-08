import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <header className="max-w-[90%] m-auto">
      <div className="container ml-auto lg:ml-6 flex items-center justify-between -mt-6 lg:-mt-[16rem] xl:-mt-[22rem]">
        <div className="leading-24">
          <h1 className="text-[36px] lg:text-[44px] xl:text-[55px] desktop-med:text-[60px] font-bold text-app-dark">
            Everything to grow
            <p>your Rental business</p>
            <p>
              <span className="text-btn-green w-16 inline-block"> — </span>
              <span>all in one place</span>
            </p>
          </h1>
          <p className="font-medium text-sm lg:text-md desktop-med:text-lg desktop-med:w-[600px] lg:w-[450px] md:w-[350px] leading-7 text-[#202222]">
            Unlock the full potential of your SME car rental business with our
            cutting-edge SaaS solution. Streamline your operations, boost
            efficiency, and drive growth with our comprehensive suite of tools
            designed to simplify your daily tasks. With Carent you can send
            invoices, collect payments, text with customers, accept online
            bookings, build a digital presence, and start growing with powerful,
            easy-to-use tools.
          </p>
          <button className="border bg-btn-green text-app-white text-md lg:text-xl border-white shadow-lg rounded-xl font-bold px-8 py-3 lg:py-4 my-5">
            Get Started
          </button>
        </div>
        <div className="hidden md:block lg:mr-40">
          <Image
            src={"/images/hero-dashboard.png"}
            width={450}
            height={350}
            alt="Hero Image showing dashboard prototype"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
