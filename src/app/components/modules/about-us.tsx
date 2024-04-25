import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <header className="my-24 hidden md:block">
      <div className="flex justify-between">
        <div className="bg-bg-hover ml-20 rounded-xl p-6">
          <h1 className="w-[360px] text-app-dark text-[26px] font-bold text-left mt-8">
            Powerful and easy to use saas builder platform
          </h1>
          <p className="text-left text-app-grey font-small w-[36rem] text-lg mt-2">
            It is a long established fact that a reader will be by the form
            readable content of a page when looking at its layout. The point of
            using lorem ipsum
          </p>
          <div className="flex space-x-8 mt-8">
            <Image
              src={"/images/costicon.png"}
              width={80}
              height={96}
              alt="Cost Image Icon"
            />
            <div>
              <h3 className="text-app-dark text-[22px] font-bold">
                Cost Effective
              </h3>
              <p className="text-left text-app-grey font-small w-72 text-lg">
                Contrary to popular belief. Lorem Ipsum is not simply random
                text
              </p>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="">
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
