import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleDarkMode = () => {
    setDarkMode(darkMode ? false : true);
  };

  return (
    <button onClick={handleDarkMode} className="flex justify-center w-10 items-center p-2 text-2xl font-semibold rounded-md duration-150 gap-2  dark:text-white hover:bg-headings hover:text-white">
      {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
    </button>
  );
};

export default DarkMode;
