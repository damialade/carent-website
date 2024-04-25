import React from "react";

const FooterNav = () => {
  return (
    <header className="mx-auto max-w-[80%] my-24 hidden md:block text-app-grey">
      <div>
        <hr className="h-0.5 my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex justify-between">
          <nav className="contents font-normal text-base lg:text-lg">
            <ul className="flex items-center px-4">
              <li className="p-4 active">
                <a href="">
                  <span>Home</span>
                </a>
              </li>
              <li className="p-4">
                <a href="">
                  <span>About Us</span>
                </a>
              </li>
              <li className="p-4">
                <a href="">
                  <span>Solutions</span>
                </a>
              </li>
              <li className="p-4">
                <a href="">
                  <span>Integrations</span>
                </a>
              </li>
              <li className="p-4">
                <a href="">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>

          <nav className="contents font-normal text-base lg:text-lg">
            <ul className=" ml-auto mr-4 flex items-center px-4">
              <li className="p-4 active">
                <a href="">
                  <span>Terms & Conditions</span>
                </a>
              </li>
              <li className="p-4">
                <a href="">
                  <span>Privacy Policy</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <hr className="h-0.5 my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </header>
  );
};
export default FooterNav;
