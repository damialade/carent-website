//@ts-nocheck
"use client"; // This is a client component
import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header className="mx-auto max-w-[90%] mt-16 mb-12 block">
      <div className="flex justify-center">
        <button className="border bg-[#EFECFF] border-[#EFECFF] text-lg lg:text-xl text-btn-green shadow-lg rounded-full font-bold px-12 py-5 mb-3">
          How it Works
        </button>
      </div>
      <div className="flex justify-center">
        <h1 className=" w-[533px] text-center text-[28px] md:text-[32px] lg:text-[40px] font-bold text-app-dark">
          Work smarter with easy access for users
        </h1>
      </div>
      {/* section  */}
      <div className="max-w-[90%] text-center md:mx-auto my-8 md:flex md:justify-between md:space-x-4 lg:space-x-0">
        <div>
          <button
            onClick={accountCreation}
            className={`border bg-bg-hover text-app-dark md:text-md lg:text-xl border-white shadow-lg rounded-xl font-bold px-8 py-4 my-5 ${
              selected === "createAccount" && "text-btn-green"
            }`}
          >
            01. Create Account
          </button>
        </div>
        <div>
          <button
            onClick={accountOnboarding}
            className={`border bg-bg-hover text-app-dark md:text-md lg:text-xl border-white shadow-lg rounded-xl font-bold px-10 md:px-8 py-4 my-5 ${
              selected === "onboarding" && "text-btn-green"
            }`}
          >
            02. Onboarding
          </button>
        </div>
        <div>
          <button
            onClick={accountAnalytics}
            className={`border bg-bg-hover text-app-dark md:text-md lg:text-xl border-white shadow-lg rounded-xl font-bold px-8 py-4 my-5 ${
              selected === "analytics" && "text-btn-green"
            }`}
          >
            03. Track Analytics
          </button>
        </div>
      </div>
      {/* Account Creation */}
      {createAccount && (
        <div className="md:flex md:justify-between" data-aos="fade-up">
          <div className=" ml-8 lg:ml-16">
            <div className="lg:flex lg:space-x-8 mt-8">
              <div className="hidden lg:inline">
                <Image
                  src={"/images/person.png"}
                  width={97}
                  height={97}
                  alt="Avatar Icon"
                />
              </div>
              <div>
                <h3 className="text-app-dark md:text-[24px] lg:text-[28px] font-bold md:w-72">
                  Create your account & start work
                </h3>
                <p className="text-left text-app-grey font-small md:w-96 md:text-md lg:text-lg">
                  Creating your account is fast and straightforward. Provide a
                  few key details about your business, and you&apos;ll be up and
                  running in no time.
                </p>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="hidden md:block lg:mr-12 md:mr-6 md:mt-12 lg:mt-0">
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
        <div className="md:flex md:justify-between" data-aos="fade-up">
          <div className=" ml-8 lg:ml-16">
            <div className="lg:flex lg:space-x-8 mt-8">
              <div className="hidden lg:inline">
                <Image
                  src={"/images/onboardingIcon.png"}
                  width={97}
                  height={97}
                  alt="Avatar Icon"
                />
              </div>
              <div>
                <h3 className="text-app-dark md:text-[24px] lg:text-[28px] font-bold md:w-72">
                  Onboard your customers seamlessly
                </h3>
                <p className="text-left text-app-grey font-small md:w-96 md:text-md lg:text-lg">
                  Our dedicated onboarding team will guide you through the
                  initial setup, ensuring you&apos;re comfortable navigating the
                  platform and taking advantage of all its features
                </p>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="hidden md:block lg:mr-12 md:mr-6 md:mt-12 lg:mt-0">
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
        <div className="md:flex md:justify-between" data-aos="fade-up">
          <div className=" ml-8 lg:ml-16">
            <div className="lg:flex lg:space-x-8 mt-8">
              <div className="hidden lg:inline">
                <Image
                  src={"/images/analyticsIcon.png"}
                  width={97}
                  height={97}
                  alt="Avatar Icon"
                />
              </div>
              <div>
                <h3 className="text-app-dark md:text-[24px] lg:text-[28px] font-bold md:w-72">
                  Track performance in real time
                </h3>
                <p className="text-left text-app-grey font-small md:w-96 md:text-md lg:text-lg">
                  As soon as your account is activated, you&apos;ll gain full
                  access to our comprehensive suite of car rental management
                  tools. Start automating workflows, optimizing your fleet, and
                  delighting customers right away.
                </p>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="hidden md:block lg:mr-12 md:mr-6 md:mt-12 lg:mt-0">
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
