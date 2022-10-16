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
    <nav>
      <div
        className="flex flex-col dark:text-white xl:flex-row mx-1 mt-3 text-xl lg:text-2xl justify-center items-center gap-3 xl:justify-start cursor-pointer"
        onClick={() => setShowSidebar((showSidebar) => !showSidebar)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
        <DarkMode />
      </div>
      
      {showSidebar && (
        <div className="xl:w-[22rem] w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 py-3">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
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
