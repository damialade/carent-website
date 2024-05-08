//@ts-nocheck
"use client";
import React, { useEffect } from "react";
import Schedule from "../icons/Schedule";
import Quotes from "../icons/Quotes";
import Billing from "../icons/Billing";
import Image from "next/image";
import Customer from "../icons/Customer";
import Credit from "../icons/Credit";
import Vehicle from "../icons/Vehicle";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const features = [
    {
      id: "1",
      icon: <Customer className="group-hover:fill-app-dark" />,
      title: "Customer Management",
      description:
        "Provide exceptional customer service with our integrated customer management features. Maintain detailed records, communicate effectively, and build lasting relationships with your clients.",
    },
    {
      id: "2",
      icon: <Schedule className="group-hover:fill-app-dark" />,
      title: "Scheduling",
      description:
        "Seamlessly manage all your rental reservations in one centralized platform. Our intuitive booking system allows customers to easily make, modify, and cancel reservations online, while you maintain full control over availability and pricing.",
    },
    {
      id: "3",
      icon: <Quotes className="group-hover:fill-app-dark" />,
      title: "Quotes & Estimates",
      description:
        "Providing a fixed, non-negotiable price for the requested products or services. The quoted price will not change if the customer accepts the quote.",
    },
    {
      id: "4",
      icon: <Credit className="group-hover:fill-app-dark" />,
      title: "Credit Card Payment",
      description:
        "Online credit card repayment calculators can help customers determine how much they need to pay each month to pay off their balance faster and save on interest.",
    },
    {
      id: "5",
      icon: <Vehicle className="group-hover:fill-app-dark" />,
      title: "Vehicle Management",
      description:
        "Optimize the performance and utilization of your vehicle fleet. Track maintenance schedules, monitor usage, and make data-driven decisions to keep your cars on the road and generating revenue.",
    },
    {
      id: "6",
      icon: <Billing className="group-hover:fill-app-dark" />,
      title: "Billing & Invoicing",
      description:
        "Streamline your invoicing and billing processes with our automated system. Generate professional invoices, process payments, and manage customer accounts with ease.",
    },
  ];
  return (
    <header className="mx-auto max-w-[90%] my-24 block" data-aos="zoom-in">
      <div className="lg:flex justify-between space-x-6">
        <div className="ml-6 w-25">
          <div className="flex justify-left">
            <button className="border bg-btn-green border-btn-green text-sm text-white shadow-lg rounded-full font-medium px-4 py-2 mb-3">
              Features
            </button>
          </div>
          <h1 className="lg:w-[250px] text-app-dark text-[26px] font-bold text-left">
            Get Complete Visibility and Control
          </h1>
          <p className="text-left text-app-grey font-small lg:w-[22rem] text-md lg:text-lg my-2">
            We are committed to offering you the most valuable innovations and
            features that will make you stand out of the competition
          </p>

          <div className="hidden lg:block -mt-36 -ml-24">
            <Image
              src={"/images/pattern.png"}
              width={507}
              height={780}
              alt="Cost Image Icon"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-2 lg:max-h-24 md:gap-3 lg:gap-0">
          {features.map((feature) => (
            <div
              key={feature?.id}
              className="bg-bg-hover lg:mx-12 rounded-xl p-6 hover:bg-btn-green mb-4 group"
            >
              <div className="flex space-x-4">
                <div>{feature?.icon}</div>
                <h4 className="text-app-dark text-md lg:text-lg font-semibold group-hover:text-white">
                  {feature?.title}
                </h4>
              </div>
              <p className="my-2 text-sm text-app-grey font-medium group-hover:text-white">
                {feature?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Features;
