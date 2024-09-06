import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <header className="mx-auto max-w-[90%] my-24 block text-app-grey">
      <div
        className="md:flex md:justify-between space-y-6 md:space-y-0"
        id="contact"
      >
        <div className="lg:ml-16">
          <Link legacyBehavior href="/">
            <a className="flex items-left justify-left">
              <Image
                src={"/images/logo.png"}
                width={117}
                height={24}
                alt="Logo of the website"
                priority
              />
            </a>
          </Link>
          <p className="w-60 lg:w-80 font-normal text-left text-sm text-app-grey mt-4">
            Don &apos;t wait - create your account today and unlock the full
            potential of your car rental business. Get started now and
            experience the transformative power of our SaaS platform.
          </p>
        </div>
        <div className="">
          <h5 className="text-btn-green font-bold text-md lg:text-lg mb-2">
            Have you any questions?
          </h5>
          <div className="flex space-x-4">
            <Image
              src={"/images/questions.png"}
              width={40}
              height={40}
              alt="questions icon"
              priority
            />
            <div className="space-y-1">
              <p>+44 (0) 789097900</p>
              <p>admin@carent.com</p>
            </div>
          </div>
        </div>
        <div className="space-y-4 mr-20">
          <h5 className="text-btn-green font-bold text-lg">Follow us on</h5>
          <div className="flex space-x-2">
            <Image
              src={"/images/facebook.png"}
              width={24}
              height={20}
              alt="Facebook Logo"
              priority
            />
            <p>Facebook</p>
          </div>
          <div className="flex space-x-2">
            <Image
              src={"/images/twitter.png"}
              width={24}
              height={20}
              alt="Twitter Logo"
              priority
            />
            <p>Twitter</p>
          </div>
          <div className="flex space-x-2">
            <Image
              src={"/images/linkedin.png"}
              width={24}
              height={20}
              alt="Linkedin Logo"
              priority
            />
            <p>Linkedin</p>
          </div>
          <div className="flex space-x-2">
            <Image
              src={"/images/insta.png"}
              width={24}
              height={20}
              alt="Instagram Logo"
              priority
            />
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
