import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <header className="mx-auto max-w-[90%] my-24 hidden md:block text-app-grey">
      <div className="flex justify-between ">
        <div className="ml-16">
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
          <p className="w-80 font-normal text-left text-sm text-app-grey mt-4">
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
            diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
            muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.
          </p>
        </div>
        <div className="">
          <h5 className="text-btn-green font-bold text-lg mb-2">
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
