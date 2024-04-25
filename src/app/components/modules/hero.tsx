import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <header className="max-w-full m-auto text-app-gray hidden md:block">
      {/* navbar starts */}
      <div className="ml-[20rem] -mt-2">
        <Image
          src={"/images/hero-image.png"}
          width={1058}
          height={538}
          alt="Hero Image covering navbar"
        />
      </div>
      <div className="container flex items-center relative -top-[27rem] ">
        <div className="ml-24">
          <Link legacyBehavior href="/">
            <a className="flex items-center justify-center">
              <Image
                src={"/images/logo.png"}
                width={117}
                height={24}
                alt="Logo of the website"
                priority
              />
            </a>
          </Link>
        </div>
        <nav className="contents font-semibold text-base lg:text-lg">
          <ul className=" ml-auto mr-4 flex items-center border border-stone-100 text-white shadow-xl rounded-full px-4">
            <li className="p-4 active">
              <a href="">
                <span>Home</span>
              </a>
            </li>
            <li className="p-4">
              <a href="">
                <span>About Us</span>
              </a>
            </li>
            <li className="p-4">
              <a href="">
                <span>Solutions</span>
              </a>
            </li>
            <li className="p-4">
              <a href="">
                <span>Integrations</span>
              </a>
            </li>
            <li className="p-4">
              <a href="">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <button className="mr-20 border bg-white border-white shadow-lg rounded-full font-bold px-10 py-4">
            Demo
          </button>
        </div>
      </div>
      {/* navbar ends */}
      {/* section 1 */}
      <div className="container ml-24 flex items-center justify-between -mt-[22rem]">
        <div className="leading-24">
          <h1 className="text-[55px] font-bold text-app-dark">
            Everything to grow
            <p>your Rental business</p>
            <p>
              <span className="text-btn-green w-16 inline-block"> — </span>
              <span>all in one place</span>
            </p>
          </h1>
          <p className="font-medium text-md w-[450px] leading-7 text-[#202222]">
            With Carent you can send invoices, collect payments, text with
            customers, accept online bookings, build a digital presence, and
            start growing with powerful, easy-to-use tools.
          </p>
          <button className="border bg-btn-green text-app-white text-xl border-white shadow-lg rounded-xl font-bold px-8 py-4 my-5">
            Get Started
          </button>
        </div>
        <div className="mr-40">
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
