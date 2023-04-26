import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  const [isTranslate, setisTranslate] = useState(true);
  useEffect(() => {
    if (getCookie("googtrans")?.includes("en")) {
      setisTranslate(true);
    } else {
      // setisTranslate(false);
    }

    return () => {};
  }, []);

  return (
    <section
      className="py-36 md:h-screen h-auto items-center flex relative"
      id="home"
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container relative">
        <div className="grid grid-cols-1">
          <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-semibold mb-7 position-relative">
            Create The Future You <br />
            Desire Today. Let&apos;s{" "}
            {/* <span
              className="typewrite relative text-type-element"
              data-period="2000"
              data-type='[ "Business", "Startups", "Digital Agency", "Marketing" ]'
            ></span> */}
            <span className={isTranslate ? "notranslate" : ""}>
              <TypewriterComponent
                options={{
                  wrapperClassName: "typewrite relative text-type-element",
                  strings: [
                    "Start Your Journey.",
                    "Invest Smarter.",
                    "Grow Together.",
                  ],
                  autoStart: true,

                  loop: true,
                }}
              />
            </span>
          </h4>

          <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">
            Unlock your investment potential with expert guidance in real
            estate, stocks, and crypto for financial success.
          </p>

          <div className="relative mt-10">
            <Link
              href="/register"
              className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
