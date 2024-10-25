import Image from "next/image";
import React from "react";
import FIcon from "@/public/svg/facebook.svg";
import IIcon from "@/public/svg/Insta.svg";
import TIcon from "@/public/svg/twitter.svg";
import YIcon from "@/public/svg/Yt.svg";
import LIcon from "@/public/svg/linkedin.svg";
import AppleIcon from "@/public/svg/apple.svg";
import PlayIcon from "@/public/svg/play.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#532F82] text-white px-[132px] pt-[71px] pb-[38px]">
        <div className="flex justify-between">
          <ul>
            <li className="text-[22px] text-white font-medium mb-6">Company</li>
            <li className="text-[#B6B6E5] text-base font-normal mb-3">
              <Link href="">About</Link>
            </li>
            <li className="text-[#B6B6E5] text-base font-normal mb-3">
              <Link href="">Contact us</Link>
            </li>
            <li className="text-[#B6B6E5] text-base font-normal mb-3">
              <Link href="">FAQs</Link>
            </li>
          </ul>
          <ul>
            <li className="text-[22px] text-white font-medium mb-6">
              Quick links
            </li>
            <li className="text-[#B6B6E5] text-base font-normal mb-3">
              <Link href="">Find Services</Link>
            </li>
            <li className="text-[#B6B6E5] text-base font-normal mb-3">
              <Link href="">Pricing & plans</Link>
            </li>
            <li className="text-[#B6B6E5] text-base font-normal mb-3">
              <Link href="">List your business</Link>
            </li>
          </ul>
          <ul>
            <li className="text-[22px] text-white font-medium mb-6">
              Resources
            </li>
            <li className="text-[#B6B6E5] text-base font-normal mb-3">
              <Link href="">Blog</Link>
            </li>
            <li className="text-[#B6B6E5] text-base font-normal mb-3">
              <Link href="">Affiliate program</Link>
            </li>
          </ul>
          <ul>
            <li className="text-[22px] text-white font-medium mb-6">
              More from Dutiful
            </li>
            <li className="text-[#B6B6E5] text-base font-normal mb-3">
              <Link href="">Dutiful jobs</Link>
            </li>
          </ul>
        </div>
        <div className="border border-[#573485] w-full mt-[47px] mb-[26px]"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-[20px] font-medium text-lg">
            <p>Follow us</p>
            <Image alt="social icon" src={FIcon} height={24} width={24}></Image>
            <Image alt="social icon" src={IIcon} height={24} width={24}></Image>
            <Image alt="social icon" src={TIcon} height={24} width={24}></Image>
            <Image alt="social icon" src={YIcon} height={24} width={24}></Image>
            <Image alt="social icon" src={LIcon} height={24} width={24}></Image>
          </div>
          <div className="flex items-center space-x-[20px]">
            <p>Download the app</p>
            <Image
              alt="social icon"
              src={AppleIcon}
              height={36}
              width={36}
            ></Image>
            <Image
              alt="social icon"
              src={PlayIcon}
              height={36}
              width={36}
            ></Image>
          </div>
        </div>
        <div className="border border-[#573485] w-full mt-[47px] mb-[26px]"></div>

        <div className="flex items-center space-x-[102px]">
          <p>© 2022 Dutiful®</p>
          <div className="flex items-center space-x-8">
            <Link href="" className="text-[#B6B6E5] text-base font-normal">
              Terms of Service
            </Link>
            <Link href="" className="text-[#B6B6E5] text-base font-normal">
              Privacy Policy
            </Link>
            <Link href="" className="text-[#B6B6E5] text-base font-normal">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
