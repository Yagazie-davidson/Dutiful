import Image from "next/image";
import localFont from "next/font/local";
import HeroImage from "@/public/image/Hero-image.png";
import ReviewImage from "@/public/image/Review.png";
import PhoneMockImage from "@/public/image/Phone-mock.png";
import Man1 from "@/public/image/Man1.png";
import Woman1 from "@/public/image/woman1.png";
import Woman2 from "@/public/image/woman2.png";
import Calendar from "@/public/image/Calendar.png";
import DiscoverImage from "@/public/image/discover.svg";
import MessageImage from "@/public/image/messages.png";
import NoteImage from "@/public/image/note-2.png";

const Recoleta = localFont({
  src: "./fonts/Recoleta-RegularDEMO.otf",
  variable: "--font-Recoleta",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="px-[132px]">
      <div className="h-screen flex items-center justify-between">
        <div>
          <h3
            className={`${Recoleta.className} text-[#230B34] font-bold text-4xl`}
          >
            List and grow your business with just few clicks
          </h3>
          <p className="text-[#383838] text-xl font-normal pt-4">
            Eliminate manual work and save time by listing your business or
            service on the best business directory in Nigeria.
          </p>
        </div>
        <Image alt="Hero img" src={HeroImage} width={634} height={503} />
      </div>
      <div className="flex items-center justify-between w-full mt-32 ">
        <div className="">
          <Image alt="Review img" src={ReviewImage} width={900} height={900} />
        </div>
        <div>
          <h3
            className={`${Recoleta.className} text-[#230B34] font-bold text-4xl`}
          >
            Collect reviews and ratings from customers
          </h3>
          <p className="text-[#383838] text-xl font-normal pt-4">
            Accelerate your business reputation by 90% and gain social proof
            through reviews and ratings requested from customers.
          </p>
        </div>
      </div>
      <div className="mt-32 bg-[#FCFAFF] rounded-3xl flex justify-center py-7">
        {/* <div className="relative">
          <div className="bg-[#532F82] rounded-[31px] h-[450px] w-[450px]"></div>
          <div className="absolute top-0 w-full">
            <Image
              alt="Hero img"
              src={PhoneMockImage}
              width={1000}
              height={1000}
            />
          </div>
        </div> */}
        <div className="flex flex-col space-y-6">
          <div className="bg-[#FFFFFF] text-[#464646] w-full max-w-[480px] rounded-[26px] px-[21px] pb-4 pt-[21px]">
            <Image alt="discover" src={DiscoverImage} width={40} height={40} />
            <h4 className="font-bold text-lg">Get Discovered</h4>
            <p className="font-normal text-base">
              Dutiful is more than just a business directory; it also enhances
              your web profile. The platform makes use of SEO techniques to
              boost each listing's performance in the SERPs, providing any
              business the chance to rank, regardless of how strong their
              current online presence is.
            </p>
          </div>
          <div className="bg-[#FFFFFF] text-[#464646] -ml-32 w-full max-w-[480px] rounded-[26px] px-[21px] pb-4 pt-[21px]">
            <Image alt="discover" src={MessageImage} width={40} height={40} />
            <h4 className="font-bold text-lg">Instant Chat</h4>
            <p className="font-normal text-base">
              You'll be able to chat and send voice recordings with potential
              and existing customers, including managing your captured leads
              anytime, anywhere via the platform
            </p>
          </div>
          <div className="bg-[#FFFFFF] text-[#464646] w-full max-w-[480px] rounded-[26px] px-[21px] pb-4 pt-[21px]">
            <Image alt="discover" src={NoteImage} width={40} height={40} />
            <h4 className="font-bold text-lg">Quotations</h4>
            <p className="font-normal text-base">
              In addition to providing customers with access to information,
              offering customer quotations is very advantageous to the way you
              conduct your business. On Dutiful, you'll be able to send and
              receive quotation from customers - an important step in lead
              management.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between gap-x-9 my-32">
        <div className="flex items-center space-x-4 w-full">
          <div>
            <div className="flex items-center w-fit rounded-[13px]  py-7 pl-[25px] pr-[44px] shadow-lg space-x-[22px]">
              <div className="flex items-center  -space-x-2">
                <div className="z-30 ...">
                  {" "}
                  <Image alt="avater" src={Man1} width={44} height={44} />
                </div>
                <div className="z-20 ...">
                  {" "}
                  <Image alt="avater" src={Woman1} width={44} height={44} />
                </div>
                <div className="z-10 ...">
                  {" "}
                  <Image alt="avater" src={Woman2} width={44} height={44} />
                </div>
                <div className="z-0 w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[#9B51E0] text-white">
                  +4
                </div>
              </div>
              <h4 className="text-xl font-normal">Booked</h4>
            </div>
            <Image
              alt="Hero img"
              src={Calendar}
              width={311.83}
              height={311.83}
            />
          </div>

          <div className="flex flex-col space-y-4 items-center w-fit rounded-[13px]  py-7 px-[25px] shadow-lg">
            <div className="text-black text-lg py-[17px] px-[49px] border border-[#EEEEFF] rounded-lg">
              13:30
            </div>
            <div className="text-black text-lg py-[17px] px-[49px] border border-[#EEEEFF] rounded-lg">
              14:00
            </div>
            <div className="text-black text-lg py-[17px] px-[49px] border border-[#EEEEFF] rounded-lg">
              14:30
            </div>
            <div className="text-white text-lg py-[17px] px-[49px] rounded-lg bg-[#603F8B]">
              15:00
            </div>
          </div>
        </div>
        <div>
          <h3
            className={`${Recoleta.className} text-[#230B34] font-bold text-4xl`}
          >
            Accept and sell appointments
          </h3>
          <p className="text-[#383838] text-xl font-normal pt-4">
            Let customers book their own appointment or consultation. Start
            accepting payments for appointments through your booking page.
          </p>
        </div>
      </div>
    </main>
  );
}
