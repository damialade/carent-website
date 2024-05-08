//@ts-nocheck
"use client"; // This is a client component
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const aboutClick = () => {
    const element = document.getElementById("about");
    if (element) {
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const solutionClick = () => {
    const element = document.getElementById("solutions");
    if (element) {
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const integrationClick = () => {
    const element = document.getElementById("integrations");
    if (element) {
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const contactClick = () => {
    const element = document.getElementById("contact");
    if (element) {
      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <header className="max-w-full m-auto text-app-gray block">
      {/* navbar starts */}
      <div className="lg:ml-[20rem] desktop-wide:ml-[24rem] desktop-2xl:ml-[32rem] desktop-des:ml-[42rem] -mt-2 hidden lg:block">
        <Image
          src={"/images/hero-image.png"}
          width={1058}
          height={538}
          alt="Hero Image covering navbar"
        />
      </div>
      <div className="container flex items-center relative lg:-top-[20rem] xl:-top-[27rem]">
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
        <nav className="contents font-semibold text-base lg:text-lg desktop-des:text-2xl">
          <ul className="lg:ml-auto lg:mr-4 desktop-des:mr-[2rem] flex items-center border border-stone-100 text-white shadow-xl rounded-full xl:px-4">
            {/* <li className="lg:p-3 xl:p-4">
              <a href="">
                <span>Home</span>
              </a>
            </li> */}
            <li className="lg:p-3 xl:p-4">
              <button onClick={aboutClick} className="cursor-pointer">
                <span>About Us</span>
              </button>
            </li>
            <li className="lg:p-3 xl:p-4">
              <button onClick={solutionClick} className="cursor-pointer">
                <span>Solutions</span>
              </button>
            </li>
            <li className="lg:p-3 xl:p-4">
              <button onClick={integrationClick} className="cursor-pointer">
                <span>Integrations</span>
              </button>
            </li>
            <li className="lg:p-3 xl:p-4">
              <button onClick={contactClick} className="cursor-pointer">
                <span>Contact</span>
              </button>
            </li>
          </ul>
        </nav>
        <div>
          <button className="lg:mr-2 xl:mr-20 desktop-des:mr-6 border bg-white border-white shadow-lg rounded-full font-bold lg:px-8 xl:px-10 lg:py-3 xl:py-4">
            Demo
          </button>
        </div>
      </div>
      {/* navbar ends */}
    </header>
  );
};

export default Navbar;
