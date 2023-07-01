import React, { useEffect } from "react";
// import { getCookie } from "cookies-next";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Hero = () => {
  useEffect(() => {
    // if (getCookie("googtrans")?.includes("en")) {
    //   setisTranslate(true);
    // } else {
    //   // setisTranslate(false);
    // }

    return () => {};
  }, []);

  return (
    <section className=" py-36 h-auto items-center flex relative" id="home">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container relative text-white">
        <h1 className=" font-inter font-extralight text-[72px] tracking-[-3px] text-center">
          Carissa Barney, QPFC
        </h1>
        <hs2 className=" font-inter text-[25px] tracking-[-2.5px] leading-normal text-center">
          Vice President, Wealth Management, Financial Advisor, Financial
          Planning Specialist, Insurance Planning Director
        </hs2>
        <div className=" flex justify-center gap-[15px] mt-8">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/carissa.a.barney/"
          >
            <FaFacebookF className=" h-[24px] w-[24px]" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/carissa-barney/"
          >
            <FaLinkedinIn className=" h-[24px] w-[24px]" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:advisor.carissabarney@gmail.com"
          >
            <IoIosMail className=" h-[24px] w-[24px]" />
          </a>
        </div>
        <p className=" text-lg mt-[16px] text-center">
          <span className=" font-bold">Direct:&nbsp;&nbsp;</span> +1(424)
          279-3916
        </p>
        <div className=" flex justify-center mt-[30px]">
          <a
            href="https://wa.me/14242793916"
            target="_blank"
            rel="noreferrer"
            className=" py-4 px-[48px] bg-[#3182c1] text-[19px]  rounded-full"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
