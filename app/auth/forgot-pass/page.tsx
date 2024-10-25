import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import Mail from "@/public/svg/Message.svg";

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
            <h4
              className={`${Recoleta.className} text-[#1E1E4B] font-bold text-4xl`}
            >
              Forgot password
            </h4>
            <p className="text-base text-[#686868] font-normal">
              Enter your email and well send you a mail on how to reset your
              password.
            </p>
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
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-[#E7EAF1] h-[50px] w-full rounded-md text-black px-5 focus:outline-none focus:border-2 focus:border-[#603F8B]"
                />
                <div className="absolute top-3 right-5">
                  <Image alt="mail" src={Mail} height={24} width={24} />
                </div>
              </div>
            </div>

            <button className="text-white text-lg py-[17px] px-[49px] rounded-md bg-[#532F82]">
              <Link href="/auth/forgot-pass/success">Send email</Link>
            </button>
            <p className="text-[#a3b1bf] text-base font-normal text-center">
              Or{" "}
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

export default page;
