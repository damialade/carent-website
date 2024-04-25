import React from "react";
import Image from "next/image";

const Intergrations = () => {
  return (
    <header className="mx-auto max-w-full my-24 hidden md:block bg-bg-hover py-12">
      <div className="flex justify-center">
        <button className="border text-[#EFECFF] border-[#EFECFF] text-xl bg-btn-green shadow-lg rounded-full font-bold px-12 py-5 my-3">
          Integrations
        </button>
      </div>
      <div className="flex justify-center">
        <h1 className=" w-[633px] text-center text-[40px] font-bold text-app-dark">
          We are integrated with Industry best service providers
        </h1>
      </div>

      {/* section  */}
      <div className="flex justify-between my-12 mx-auto max-w-[80%]">
        <div>
          <Image
            src={"/images/first.png"}
            width={207}
            height={80}
            alt="Quickbooks logo"
          />
        </div>
        <div>
          <Image
            src={"/images/second.png"}
            width={96}
            height={80}
            alt="Stripe logo"
          />
        </div>
        <div>
          <Image
            src={"/images/third.png"}
            width={150}
            height={80}
            alt="Paypal logo"
          />
        </div>
        <div>
          <Image
            src={"/images/fourth.png"}
            width={163}
            height={80}
            alt="venmo logo"
          />
        </div>
      </div>
    </header>
  );
};

export default Intergrations;
