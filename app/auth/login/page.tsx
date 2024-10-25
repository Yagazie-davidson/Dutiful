import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import ShowIcon from "@/public/svg/Show.svg";

const Recoleta = localFont({
  src: "../.././fonts/Recoleta-RegularDEMO.otf",
  variable: "--font-Recoleta",
  weight: "100 900",
});
const page = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-16">
        <div className="w-full">
          <div className="px-[450px] flex flex-col space-y-3">
            <p className="text-base text-[#686868] font-normal">
              Jump right back in
            </p>
            <h4
              className={`${Recoleta.className} text-[#1E1E4B] font-bold text-4xl`}
            >
              Login
            </h4>
          </div>
          <form
            action=""
            className=" px-[450px] flex flex-col space-y-6 mt-[30px] mb-[80px]"
          >
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
                className="bg-[#E7EAF1] h-[50px] w-full rounded-md text-black px-5 focus:outline-none focus:border-2 focus:border-[#603F8B]"
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
              <p className="text-base font-extralight text-right">
                <Link href="/auth/forgot-pass" className="text-[#a16ae8]">
                  Forgot password?
                </Link>
              </p>
            </div>

            <button className="text-white text-lg py-[17px] px-[49px] rounded-md bg-[#532F82]">
              Login
            </button>
            <p className="text-[#a3b1bf] text-base font-normal text-center">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="text-[#a16ae8]">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
