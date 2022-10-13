import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Logo from "../assets/logo/tiktik-logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[6.25rem] md:w-[8.125rem]">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="Next Reel"
            layout="responsive"
          />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
