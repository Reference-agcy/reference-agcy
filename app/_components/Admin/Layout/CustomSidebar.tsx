"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { RiBloggerFill } from "react-icons/ri";

interface Props {
  links: {
    title: string;
    url: string;
  }[];
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const CustomSidebar = ({ links, isSidebarOpen, toggleSidebar }: Props) => {
  const pathname = usePathname();

  return (
    <aside
      className={`z-50 h-screen bg-gray-800 px-2 py-4 text-white max-lg:fixed max-lg:left-0 max-lg:top-0 ${
        isSidebarOpen ? "w-64" : "-translate-x-full lg:w-14"
      } transition-all duration-300 ease-in-out`}
    >
      <div
        className={`flex items-center justify-between rounded-[4px] p-2 ${isSidebarOpen ? "bg-gray-700/20" : ""}`}
      >
        {isSidebarOpen && (
          <Image
            src="/images/logo-dark.svg"
            width={100}
            height={46}
            alt="logo"
          />
        )}
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isSidebarOpen ? (
            <MdKeyboardDoubleArrowLeft size={24} />
          ) : (
            <MdKeyboardDoubleArrowRight size={24} />
          )}
        </button>
      </div>
      <nav>
        <ul className="mt-4">
          {links.map(({ title, url }) => (
            <li key={title} title={title}>
              <Link
                href="/admin/blog"
                className={`w-full rounded-[4px] p-2 duration-300 hover:bg-gray-700 ${
                  pathname === url ? "bg-gray-700" : ""
                }`}
              >
                {isSidebarOpen ? title : <RiBloggerFill size={24} />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default CustomSidebar;
