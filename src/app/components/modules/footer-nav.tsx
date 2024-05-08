//@ts-nocheck
"use client"; // This is a client component
import React from "react";

const FooterNav = () => {
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
    <header className="mx-auto lg:max-w-[80%] my-24 block text-app-grey">
      <div>
        <hr className="h-0.5 my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="md:flex justify-between">
          <nav className="contents font-normal text-base lg:text-lg">
            <ul className="flex items-center md:px-4">
              {/* <li className="p-4 active">
                <a href="">
                  <span>Home</span>
                </a>
              </li> */}
              <li className="p-4">
                <button onClick={aboutClick} className="cursor-pointer">
                  <span>About Us</span>
                </button>
              </li>
              <li className="p-4">
                <button onClick={solutionClick} className="cursor-pointer">
                  <span>Solutions</span>
                </button>
              </li>
              <li className="p-4">
                <button onClick={integrationClick} className="cursor-pointer">
                  <span>Integrations</span>
                </button>
              </li>
              <li className="p-4">
                <button onClick={contactClick} className="cursor-pointer">
                  <span>Contact</span>
                </button>
              </li>
            </ul>
          </nav>

          <nav className="contents font-normal text-base lg:text-lg">
            <ul className=" lg:ml-auto lg:mr-4 flex items-center md:px-4">
              <li className="p-4 active">
                <a href="">
                  <span>Terms & Conditions</span>
                </a>
              </li>
              <li className="p-4">
                <a href="">
                  <span>Privacy Policy</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <hr className="h-0.5 my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </header>
  );
};
export default FooterNav;
