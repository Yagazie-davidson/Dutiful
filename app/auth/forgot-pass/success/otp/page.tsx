import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-16">
        <div className="w-full">
          <div className="px-[450px] flex flex-col space-y-3 items-center">
            <h1 className="font-bold text-2xl">INPUT</h1>
            <p className="text-base text-center text-[#686868] font-normal">
              Enter OTP code that was sent to your email, segunsolaru@gmail.com.
            </p>
          </div>
          <div className=" px-[450px] flex flex-col space-y-6 mt-[30px] mb-[80px]">
            <button className="text-white text-lg py-[17px] px-[49px] rounded-md bg-[#532F82]">
              <Link href="/auth/reset-password">Confirm OTP</Link>
            </button>
            <p className="text-[#a3b1bf] text-base font-normal text-center">
              Didn&apos;t get a Code?{" "}
              <Link href="/auth/forgot-pass" className="text-[#a16ae8]">
                Resend
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
