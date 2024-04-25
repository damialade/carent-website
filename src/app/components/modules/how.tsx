"use client"; // This is a client component
import { useState } from "react";
import Image from "next/image";

const How = () => {
  const [createAccount, setCreateAccount] = useState(true);
  const [onboarding, setOnboarding] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [selected, setSelected] = useState("createAccount");

  const accountCreation = () => {
    setCreateAccount(true);
    setOnboarding(false);
    setAnalytics(false);
    setSelected("createAccount");
  };
  const accountOnboarding = () => {
    setCreateAccount(false);
    setOnboarding(true);
    setAnalytics(false);
    setSelected("onboarding");
  };
  const accountAnalytics = () => {
    setCreateAccount(false);
    setOnboarding(false);
    setAnalytics(true);
    setSelected("analytics");
  };

  return (
    <header className="mx-auto max-w-[90%] mt-16 mb-12 hidden md:block">
      <div className="flex justify-center">
        <button className="border bg-[#EFECFF] border-[#EFECFF] text-xl text-btn-green shadow-lg rounded-full font-bold px-12 py-5 mb-3">
          How it Works
        </button>
      </div>
      <div className="flex justify-center">
        <h1 className=" w-[533px] text-center text-[40px] font-bold text-app-dark">
          Work smarter with easy access for users
        </h1>
      </div>
      {/* section  */}
      <div className="max-w-[90%] mx-auto my-8 flex justify-between">
        <div>
          <button
            onClick={accountCreation}
            className={`border bg-bg-hover text-app-dark text-xl border-white shadow-lg rounded-xl font-bold px-8 py-4 my-5 ${
              selected === "createAccount" && "bg-[#1BB652] text-app-white"
            }`}
          >
            01. Create Account
          </button>
        </div>
        <div>
          <button
            onClick={accountOnboarding}
            className={`border bg-bg-hover text-app-dark text-xl border-white shadow-lg rounded-xl font-bold px-8 py-4 my-5 ${
              selected === "onboarding" && "bg-[#1BB652] text-app-white"
            }`}
          >
            02. Onboarding
          </button>
        </div>
        <div>
          <button
            onClick={accountAnalytics}
            className={`border bg-bg-hover text-app-dark text-xl border-white shadow-lg rounded-xl font-bold px-8 py-4 my-5 ${
              selected === "analytics" && "bg-[#1BB652] text-app-white"
            }`}
          >
            03. Track Analytics
          </button>
        </div>
      </div>
      {/* Account Creation */}
      {createAccount && (
        <div className="flex justify-between">
          <div className="ml-16">
            <div className="flex space-x-8 mt-8">
              <div>
                <Image
                  src={"/images/person.png"}
                  width={97}
                  height={97}
                  alt="Avatar Icon"
                />
              </div>
              <div>
                <h3 className="text-app-dark text-[28px] font-bold w-72">
                  Create your account & start work
                </h3>
                <p className="text-left text-app-grey font-small w-96 text-lg">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page from when looking at it
                  layout. The point of using Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="mr-12">
            <Image
              src={"/images/account.png"}
              width={400}
              height={250}
              alt="About Us Image"
            />
          </div>
        </div>
      )}
      {/* Onboarding */}
      {onboarding && (
        <div className="flex justify-between">
          <div className="ml-16">
            <div className="flex space-x-8 mt-8">
              <div>
                <Image
                  src={"/images/onboardingIcon.png"}
                  width={97}
                  height={97}
                  alt="Avatar Icon"
                />
              </div>
              <div>
                <h3 className="text-app-dark text-[28px] font-bold w-72">
                  Onboard your customers seamlessly
                </h3>
                <p className="text-left text-app-grey font-small w-96 text-lg">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page from when looking at it
                  layout. The point of using Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="mr-12">
            <Image
              src={"/images/onboarding.png"}
              width={400}
              height={250}
              alt="About Us Image"
            />
          </div>
        </div>
      )}
      {/* Track Analytics */}
      {analytics && (
        <div className="flex justify-between">
          <div className="ml-16">
            <div className="flex space-x-8 mt-8">
              <div>
                <Image
                  src={"/images/analyticsIcon.png"}
                  width={97}
                  height={97}
                  alt="Avatar Icon"
                />
              </div>
              <div>
                <h3 className="text-app-dark text-[28px] font-bold w-72">
                  Track performance in real time
                </h3>
                <p className="text-left text-app-grey font-small w-96 text-lg">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page from when looking at it
                  layout. The point of using Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="mr-12">
            <Image
              src={"/images/analytics.png"}
              width={400}
              height={250}
              alt="About Us Image"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default How;
