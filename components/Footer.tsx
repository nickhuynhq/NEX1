import React from "react";
import { footerList1, footerList2, footerList3 } from "../utils/constants";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

// List component to be used in Footer component
const List = ({ items, mt }: { items: string[]; mt: boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && "mt-5"}`}>
    {items.map((item) => (
      <p
        key={item}
        className="text-grey-400 text-sm hover:underline cursor-pointer"
      >
        {item}
      </p>
    ))}
  </div>
);

const Footer = () => {
  return (
    <div>
      <div className="mt-6 hidden xl:block">
        <List items={footerList1} mt={false} />
        <List items={footerList2} mt />
        <List items={footerList3} mt />
        <p className="text-grey-400 text-sm mt-5">2022 NEX1</p>
      </div>
      <div className="flex flex-col mt-5 gap-3">
        <a href="https://github.com/nickhuynhq/" className="flex justify-center items-center xl:justify-start text-4xl duration-150 hover:text-headings cursor-pointer">
          <AiFillGithub />
          <p className="hidden xl:block text-grey-400 text-sm ml-2" >
            @nickhuynhq
          </p>
        </a>

        <a href="https://github.com/nickhuynhq/" className="flex justify-center items-center xl:justify-start text-4xl duration-150 hover:text-headings cursor-pointer">
          <AiFillLinkedin />
          <p className="hidden xl:block text-grey-400 text-sm">
            <a className="hidden xl:block text-grey-400 text-sm ml-2">Nicholas Huynh</a>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
