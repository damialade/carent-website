//@ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import OpenMenu from "../icons/OpenMenu";
import AOS from "aos";
import "aos/dist/aos.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  //Scroll to view functions
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
    <header className="max-w-[90%] m-auto">
      <div className="flex justify-between py-10 ">
        <div>
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
        <div className="relative inline-block">
          <button
            type="button"
            className=" text-white font-medium rounded-lg text-sm inline-flex items-center"
            onClick={toggleDropdown}
          >
            <OpenMenu />
          </button>

          {isOpen && (
            <div
              className="origin-top-right absolute right-0 w-52 rounded-lg shadow-xl bg-btn-green ring-1 ring-black ring-opacity-5"
              data-aos="fade-up"
            >
              <ul
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
                className="text-center py-2"
              >
                {/* <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm font-medium text-app-white"
                    onClick={closeDropdown}
                  >
                    Home
                  </a>
                </li> */}
                <li>
                  <button
                    className="block mx-auto px-4 py-2 text-sm font-medium text-app-white"
                    onClick={() => {
                      closeDropdown(), aboutClick();
                    }}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    className="block mx-auto px-4 py-2 text-sm font-medium text-app-white"
                    onClick={() => {
                      closeDropdown(), solutionClick();
                    }}
                  >
                    Solutions
                  </button>
                </li>
                <li>
                  <button
                    className="block mx-auto px-4 py-2 text-sm font-medium text-app-white"
                    onClick={() => {
                      closeDropdown(), integrationClick();
                    }}
                  >
                    Integrations
                  </button>
                </li>
                <li>
                  <button
                    className="block mx-auto px-4 py-2 text-sm font-medium text-app-white"
                    onClick={() => {
                      closeDropdown(), contactClick();
                    }}
                  >
                    Contact
                  </button>
                </li>
              </ul>
              <div className="flex justify-center py-3">
                <button
                  onClick={toggleDropdown}
                  className="border bg-white border-white shadow-lg rounded-full font-bold py-2 px-6"
                >
                  Demo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Dropdown;
