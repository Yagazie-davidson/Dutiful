import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import ShowIcon from "@/public/svg/Show.svg";
import Image from "next/image";
import ProfileOff from "@/public/svg/Profile-off.svg";
import Store from "@/public/svg/store.svg";
import Check from "@/public/svg/check.svg";

const Recoleta = localFont({
  src: "../../.././fonts/Recoleta-RegularDEMO.otf",
  variable: "--font-Recoleta",
  weight: "100 900",
});

const Signup = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-16">
        <div className="w-full">
          <div className="px-[450px] flex flex-col space-y-3">
            <p className="text-base text-[#686868] font-normal">
              Sign up for free!
            </p>
            <h4
              className={`${Recoleta.className} text-[#1E1E4B] font-bold text-4xl`}
            >
              Get started
            </h4>
          </div>
          <div className="w-full flex px-[450px] justify-between mt-10 font-normal">
            <Link href="/auth/signup">
              {" "}
              <div className="flex items-center space-x-6 border border-[#EEEEFF] text-[#B1BDCA] font-normal h-[65px] py-5 px-6 w-fit rounded-[11px]">
                <Image src={ProfileOff} width={24} height={24} alt="some" />
                <p>Regular User</p>
              </div>
            </Link>
            <Link href="/auth/signup/sp">
              <div className=" relative border border-[#603F8B]  h-[65px] py-5 px-6 w-fit rounded-[11px]">
                <div className="flex items-center space-x-6">
                  <Image src={Store} width={24} height={24} alt="some" />
                  <p>Service provider</p>
                </div>
                <div className="absolute -top-5 -right-5">
                  <Image src={Check} width={38} height={38} alt="some" />
                </div>
              </div>
            </Link>
          </div>
          <form
            action=""
            className=" px-[450px] flex flex-col space-y-6 mt-[67px] mb-[80px]"
          >
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="fullName"
                className="text-[#603F8B] font-medium text-lg"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="bg-[#E7EAF1] h-[50px] w-full rounded-md text-black px-5  focus:outline-none focus:border-2 focus:border-[#603F8B]"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-[#603F8B] font-medium text-lg"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-[#E7EAF1] h-[50px] w-full rounded-md text-black px-5  focus:outline-none focus:border-2 focus:border-[#603F8B]"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phoneNumber"
                className="text-[#603F8B] font-medium text-lg"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                className="bg-[#E7EAF1] h-[50px] w-full rounded-md text-black px-5  focus:outline-none focus:border-2 focus:border-[#603F8B]"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="password"
                className="text-[#603F8B] font-medium text-lg"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="bg-[#E7EAF1] h-[50px] w-full rounded-md text-black px-5  focus:outline-none focus:border-2 focus:border-[#603F8B]"
                />
                <div className="absolute top-3 right-5 cursor-pointer">
                  <Image alt="mail" src={ShowIcon} height={24} width={24} />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="confirmPassword"
                className="text-[#603F8B] font-medium text-lg"
              >
                Re-enter Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="bg-[#E7EAF1] h-[50px] w-full rounded-md text-black px-5  focus:outline-none focus:border-2 focus:border-[#603F8B]"
                />
                <div className="absolute top-3 right-5 cursor-pointer">
                  <Image alt="mail" src={ShowIcon} height={24} width={24} />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <input
                type="checkbox"
                name="termsAndConditions"
                id="termsAndConditions"
                className="border-[#603F8B]"
              />
              <label
                htmlFor="termsAndConditions"
                className="text-sm font-light"
              >
                I agree to Dutiful's{" "}
                <Link href="" className="text-[#a16ae8] underline">
                  terms and conditions
                </Link>
              </label>
            </div>
            <button className="text-white text-lg py-[17px] px-[49px] rounded-md bg-[#532F82]">
              Sign up
            </button>
            <p className="text-[#a3b1bf] text-base font-normal text-center">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-[#a16ae8]">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
