"use client";

import { setCookie } from "cookies-next";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

function ModeSwitcher() {
  const handleModeChange = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setCookie("mode", "light");
    } else {
      document.documentElement.classList.add("dark");
      setCookie("mode", "dark");
    }
  };

  return (
    <button
      type="button"
      title="change website mode"
      onClick={handleModeChange}
      className="grid size-9 place-content-center rounded-full bg-secondary-500 shadow md:size-7 2xl:size-9"
    >
      <IoSunny className="hidden size-5 fill-gray-950 dark:block md:size-4 2xl:size-5" />
      <FaMoon className="size-5 fill-gray-950 dark:hidden md:size-4 2xl:size-5" />
    </button>
  );
}

export default ModeSwitcher;
