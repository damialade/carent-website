import React from "react";
import Schedule from "../icons/Schedule";
import Quotes from "../icons/Quotes";
import Billing from "../icons/Billing";
import Image from "next/image";
import Customer from "../icons/Customer";
import Credit from "../icons/Credit";
import Vehicle from "../icons/Vehicle";

const Features = () => {
  const features = [
    {
      id: "1",
      icon: <Customer className="group-hover:fill-app-dark" />,
      title: "Customer Management",
      description:
        "Monitor Progress against your plans and address deviations faster",
    },
    {
      id: "2",
      icon: <Schedule className="group-hover:fill-app-dark" />,
      title: "Scheduling",
      description:
        "Monitor Progress against your plans and address deviations faster",
    },
    {
      id: "3",
      icon: <Quotes className="group-hover:fill-app-dark" />,
      title: "Quotes & Estimates",
      description:
        "Monitor Progress against your plans and address deviations faster",
    },
    {
      id: "4",
      icon: <Credit className="group-hover:fill-app-dark" />,
      title: "Credit Card Payment",
      description:
        "Monitor Progress against your plans and address deviations faster",
    },
    {
      id: "5",
      icon: <Vehicle className="group-hover:fill-app-dark" />,
      title: "Vehicle Management",
      description:
        "Monitor Progress against your plans and address deviations faster",
    },
    {
      id: "6",
      icon: <Billing className="group-hover:fill-app-dark" />,
      title: "Billing & Invoicing",
      description:
        "Monitor Progress against your plans and address deviations faster",
    },
  ];
  return (
    <header className="mx-auto max-w-[90%] my-24 hidden md:block">
      <div className="flex justify-between space-x-6">
        <div className="ml-6 w-25">
          <div className="flex justify-left">
            <button className="border bg-btn-green border-btn-green text-sm text-white shadow-lg rounded-full font-medium px-4 py-2 mb-3">
              Features
            </button>
          </div>
          <h1 className="w-[250px] text-app-dark text-[26px] font-bold text-left">
            Get Complete Visibility and Control
          </h1>
          <p className="text-left text-app-grey font-small w-[22rem] text-lg mt-2">
            We are committed to offering you the most valuable innovations and
            features that will make you stand out of the competition
          </p>

          <div className="-mt-36 -ml-24">
            <Image
              src={"/images/pattern.png"}
              width={507}
              height={780}
              alt="Cost Image Icon"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 max-h-24">
          {features.map((feature) => (
            <div
              key={feature?.id}
              className="bg-bg-hover mx-12 rounded-xl p-6 hover:bg-btn-green mb-4 group"
            >
              <div className="flex space-x-4">
                <div>{feature?.icon}</div>
                <h4 className="text-app-dark text-lg font-semibold group-hover:text-white">
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
