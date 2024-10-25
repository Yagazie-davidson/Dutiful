import Image from "next/image";
import React from "react";
import Logo from "@/public/svg/dutiful-logo.svg";
import Search from "@/public/svg/Search.svg";
import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-full py-[18px] px-[132px]">
        <Link href="/">
          <Image alt="dutiful-logo" src={Logo} width={120} height={55} />
        </Link>
        <div className="flex items-center justify-between space-x-[80px]">
          <ul className="text-[#686868] text-lg font-normal flex items-center space-x-[30px]">
            <li>
              <Link href="">
                <Image alt="search" src={Search} width={40} height={40} />
              </Link>
            </li>
            <li>
              <Link href="">Business Directory</Link>
            </li>
            <li>
              <Link href="">Features</Link>
            </li>
            <li>
              <Link href="">Pricing</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-[60px]">
            <button className="border-none ring-0 text-[#1E1E4B] text-xl font-medium bg-none">
              Login
            </button>
            <button className="border-2 rounded-[6px] border-[#603F8B] text-[#603F8B] ring-0 text-xl font-medium bg-white py-4 px-[52px]">
              <Link href="/auth/signup">Sign up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
