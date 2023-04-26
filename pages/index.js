// ----------------------------------------------------------------------

import dynamic from "next/dynamic";
import Hero from "../components/landing-page/Hero.js";
import LandingAbout from "../components/landing-page/LandingAbout.js";
import WorkProcess from "../components/landing-page/WorkProcess.js";
import OurIndustries from "../components/landing-page/OurIndustries.js";
import StatsSection from "../components/landing-page-components/StatsSection";
import GetStated from "../components/landing-page/GetStated.js";
import Testimonials from "../components/landing-page/Testimonials.js";
import ContactUsCTA from "../components/landing-page/ContactUsCTA.js";
import LandingLayout from "../components/landing-layout/LandingLayout.js";
import Script from "next/script.js";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import axios from "axios";
const TickerTape = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.TickerTape),
  {
    ssr: false,
  }
);

const tapeSymbol = [
  {
    title: "TESLA, INC.",
    proName: "NASDAQ:TSLA",
  },
  {
    title: "APPLE INC.",
    proName: "NASDAQ:AAPL",
  },
  {
    title: "AMAZON.COM, INC.",
    proName: "NASDAQ:AMZN",
  },
  {
    title: " MICROSOFT CORPORATION",
    proName: "NASDAQ:MSFT",
  },
  {
    title: "NETFLIX, INC.",
    proName: "NASDAQ:NFLX",
  },
  {
    title: " META PLATFORMS, INC.",
    proName: "NASDAQ:META",
  },
  {
    title: "GOOGLE INC.",
    proName: "NASDAQ:GOOGL",
  },
  {
    title: "ALIBABA",
    proName: "NYSE:BABA",
  },
  {
    title: " SHOPIFY INC.",
    proName: "NYSE:SHOP",
  },
  {
    title: "UBER",
    proName: "NYSE:UBER",
  },
];

export default function Index() {
  const mounted = useRef(true);
  const router = useRouter();
  useEffect(() => {
    const { ref } = router.query;

    if (mounted.current) {
      if (ref) {
        axios
          .get("/api/user/" + ref)
          .then((res) => {
            console.log(res.data.data);
            localStorage.setItem("ref", JSON.stringify(res.data.data));
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
    mounted.current = false;
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <LandingAbout />
      <WorkProcess />
      <StatsSection />
      <OurIndustries />
      <GetStated />
      <Testimonials />
      <ContactUsCTA />
      {router.pathname === "/" && (
        <Script>
          {`
            easy_background("#home",
                {
                    slide: ["/img/bg/1.jpg", "/img/bg/2.jpg", "/img/bg/3.jpg"],
                    delay: [4000, 4000, 4000]
                }
            );
            `}
        </Script>
      )}
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
