import React, { useState } from "react";
import Link from "next/link";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";
import DarkMode from "./DarkMode";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const normalLink =
    "flex items-center lg:w-full p-2 gap-3 hover:bg-primary dark:hover:bg-darkSecondary dark:text-white py-3 duration-150 justify-center xl:justify-start cursor-pointer font-semibold text-headings rounded";

  return (
    <nav className="overflow-scroll">
      <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start mx-1 mt-3 gap-2">
        <div
          className="flex dark:text-gray-300 xl:flex-row text-xl lg:text-2xl cursor-pointer"
          onClick={() => setShowSidebar((showSidebar) => !showSidebar)}
        >
          {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
        </div>
        <DarkMode />
      </div>

      {showSidebar && (
        <div className="xl:w-[22rem] w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 dark:border-darkBorder xl:border-0 py-3 ">
          <div className="xl:border-b-2 border-gray-300 dark:border-darkBorder xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block">For you </span>
              </div>
            </Link>
          </div>

          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
