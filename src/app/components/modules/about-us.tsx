//@ts-nocheck
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <header className="my-24 block" data-aos="zoom-in">
      <div
        className="block justify-center lg:flex lg:justify-between"
        id="about"
      >
        <div className="bg-bg-hover mx-20 lg:mr-0 lg:ml-20 rounded-xl p-6">
          <h1 className="lg:w-[360px] text-app-dark text-[20px] lg:text-[26px] font-bold text-left mt-8">
            Empowering SMEs in the Car Rental Industry
          </h1>
          <p className="text-left text-app-grey font-small md:w-[36rem] text-md lg:text-lg mt-2">
            At Carent, we've developed a powerful SaaS platform specifically
            designed to empower small and medium-sized car rental businesses.
            Our user-friendly, all-in-one solution streamlines your daily
            operations, from online reservations and fleet management to
            invoicing and reporting. By automating workflows and eliminating
            manual processes, we help you boost efficiency and productivity,
            allowing you to focus on growing your business. Scalable and
            flexible, our platform can adapt to your evolving needs, whether
            you're just starting out or have an established fleet. Backed by
            robust security measures and reliable cloud-based infrastructure,
            you can trust your data to our platform. And with a dedicated
            support team on your side, you'll have the guidance and solutions
            you need to succeed in the competitive car rental industry.
          </p>
          <div className="md:flex md:space-x-8 mt-8">
            <Image
              src={"/images/costicon.png"}
              width={80}
              height={96}
              alt="Cost Image Icon"
            />
            <div>
              <h3 className="text-app-dark text-[18px] lg:text-[22px] font-bold">
                Cost Effective
              </h3>
              <p className="text-left text-app-grey font-small md:w-72 text-md lg:text-lg">
                The software automates and streamlines key business processes,
                leading to significant cost savings and efficiency gains.
              </p>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="lg:block hidden">
          <Image
            src={"/images/about.png"}
            width={730}
            height={529}
            alt="About Us Image"
          />
        </div>
      </div>
    </header>
  );
};

export default AboutUs;
