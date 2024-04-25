import React from "react";
import Image from "next/image";

const Solutions = () => {
  return (
    <header className="mx-auto max-w-[90%] my-20 hidden md:block">
      <div className="flex justify-center">
        <button className="border bg-[#EFECFF] border-[#EFECFF] text-xl text-btn-green shadow-lg rounded-full font-bold px-12 py-5 mb-4">
          Solutions
        </button>
      </div>
      <div className="flex justify-center">
        <h1 className=" w-[433px] text-center text-[40px] font-bold text-app-dark">
          Powerful Tools to boost your Business
        </h1>
      </div>

      {/* section  */}
      <div className="flex justify-between my-12">
        <div className="hover:bg-bg-hover p-3 hover:p-3 hover:rounded-2xl hover:shadow-lg">
          <Image
            src={"/images/icon3.png"}
            width={350}
            height={250}
            alt="Solution image for secured platform"
          />
          <h3 className="text-app-dark text-[26px] font-bold text-center">
            Secured Platform
          </h3>
          <p className="text-center text-app-grey font-medium w-80 text-lg">
            Contrary to popular belief, Lore Ipsum is not simply random text. It
            has roots in a piece.
          </p>
          <p className="text-lg text-app-grey text-center font-bold underline mt-2">
            <a>Learn More</a>
          </p>
        </div>
        <div className="hover:bg-bg-hover p-3 hover:p-3 hover:rounded-2xl hover:shadow-lg">
          <Image
            src={"/images/icon1.png"}
            width={350}
            height={250}
            alt="Solution image for secured platform"
          />
          <h3 className="text-app-dark text-[26px] font-bold text-center">
            Advanced Analytics
          </h3>
          <p className="text-center text-app-grey font-medium w-80 text-lg">
            Contrary to popular belief, Lore Ipsum is not simply random text. It
            has roots in a piece.
          </p>
          <p className="text-lg text-btn-green text-center font-bold underline mt-2">
            <a>Learn More</a>
          </p>
        </div>
        <div className="hover:bg-bg-hover p-3 hover:p-3 hover:rounded-2xl hover:shadow-lg">
          <Image
            src={"/images/icon2.png"}
            width={350}
            height={250}
            alt="Solution image for secured platform"
          />
          <h3 className="text-app-dark text-[26px] font-bold text-center">
            Powerful Automation
          </h3>
          <p className="text-center text-app-grey font-medium w-80 text-lg">
            Contrary to popular belief, Lore Ipsum is not simply random text. It
            has roots in a piece.
          </p>
          <p className="text-lg text-app-grey text-center font-bold underline mt-2">
            <a>Learn More</a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Solutions;
