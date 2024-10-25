import React from "react";
import Link from "next/link";
import Image from "next/image";
import SuccessIcon from "@/public/svg/success-mail146.svg";

const page = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-16">
        <div className="w-full">
          <div className="px-[450px] flex flex-col space-y-3 items-center">
            <Image src={SuccessIcon} alt="Success" height={139} width={139} />
            <p className="text-base text-center text-[#686868] font-normal">
              An OTP code has been sent to segunsolaru@gmail.com. Check your
              email to get the code
            </p>
          </div>
          <div className=" px-[450px] flex flex-col space-y-6 mt-[30px] mb-[80px]">
            <button className="text-white text-lg py-[17px] px-[49px] rounded-md bg-[#532F82]">
              <Link href="/auth/forgot-pass/success/otp">Next</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
