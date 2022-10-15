import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { BiSearch } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import Logo from "../assets/logo/nex1-logo.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { createOrGetUser } from "../utils";
import useAuthStore from "../store/authStore";
import { IUser } from "../types";

const Navbar = () => {
  // Hook to store user information persistently
  const [user, setUser] = useState<IUser | null>();
  const [searchValue, setSearchValue] = useState("");
  const { userProfile, addUser, removeUser } = useAuthStore();
  const router = useRouter();

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (searchValue) {
      router.push(`/search/${searchValue}`);
    }
  };

  useEffect(() => {
    setUser(userProfile);
  }, [userProfile]);

  return (
    <nav className="w-full flex justify-between items-center border-b-2 border-gray-200 py-4 px-4">
      <Link href="/">
        <div className="w-[6.25rem] md:w-[8.125rem]">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="NEX1"
            layout="responsive"
          />
        </div>
      </Link>
      <div className="relative hidden md:block">
        <form
          onSubmit={handleSearch}
          className="absolute md:static top-10 -left-20  bg-white"
        >
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search accounts and videos"
            className="bg-primary p-3 md:text-md font-medium border-2 duration-150 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[260px] md:w-[350px] rounded-full md:top-0"
          />
          <button
            onClick={handleSearch}
            className="absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400"
          >
            <BiSearch />
          </button>
        </form>
      </div>
      <div>
        {user ? (
          <div className="flex gap-5 md:gap-8">
            <Link href="/upload">
              <button className="border-2 px-2 md:px-4 text-md font-semibold rounded-md duration-150 flex items-center gap-2 hover:bg-headings hover:border-white hover:text-white">
                <IoMdAdd className="text-xl" /> {` `}
                <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            {user.image && (
              <Link href={`/profile/${user._id}`}>
                <Image
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"
                  src={user.image}
                  alt="profile photo"
                />
              </Link>
            )}
            <button
              type="button"
              className="flex gap-2 px-2 items-center rounded-md duration-150 hover:bg-red-500 hover:text-white"
              onClick={() => {
                googleLogout();
                removeUser();
              }}
            >
              <span>Log Out</span>
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log("Error")}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
