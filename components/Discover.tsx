import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { topics } from "../utils/constants";

const Discover = () => {

    const router = useRouter();
    const {topic} = router.query;
    const activeTopicStyle = 'duration-150 xl:border-2 hover:bg-primary dark:border-none dark:text-gray-300 dark:bg-headings dark:hover:bg-headings xl:border-headings px-2 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-headings';
    const topicStyle = 'duration-150 xl:border-2 hover:bg-primary dark:border-none dark:text-gray-300 dark:bg-darkSecondary dark:hover:bg-headings xl:border-gray-300 px-2 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black';
  return (
    <div className='xl:border-b-2 xl:border-gray-300 pb-6'>
      <p className='text-gray-500 dark:text-gray-300 font-semibold m-3 mt-4 hidden xl:block'>
        Popular Topics
      </p>
      <div className='flex gap-3 justify-center items-center flex-wrap'>
        {topics?.map((item) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            <div className={topic === item.name ? activeTopicStyle : topicStyle}>
              <span className='font-bold text-2xl xl:text-md '>
                {item.icon}
              </span>
              <span className={`font-medium text-md hidden xl:block capitalize`}>
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
