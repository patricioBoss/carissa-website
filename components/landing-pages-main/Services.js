import dynamic from "next/dynamic";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
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
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoicHJlY2lvdXNuYXp6eSIsImEiOiJja2M4aWdrbGIwMnd2MnlsazJlZm54NXRuIn0.A0xjQik1x92Insshsa2mkA",
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { name: "My Story and Services" },
  { name: "Client Service Team" },
  { name: "Location" },
];
const services = [
  "Wealth Management",
  "Retirement Planning",
  "Business Planning",
  "401(k) Rollovers",
  "Trust Services",
  "Sustainable Investing",
  "529 Plans",
  "Corporate Retirement Plans",
];

const MyStory = () => {
  const [more, setMore] = useState(false);

  return (
    <div className="w-full">
      <div className=" md:flex mt-8">
        <div className=" md:w-3/5 pl-3 pr-4">
          <h4 className=" text-2xl font-bold mb-[14px] mt-5">
            My Story and Services
          </h4>
          <div className="relative pt-[56.25%]">
            <iframe
              allowfullscreen
              className="absolute top-0 left-0 h-full border-none w-full "
              allow="encrypted-media"
              src="https://players.brightcove.net/644391012001/OsECwOFeq_default/index.html?videoId=6040280424001"
            ></iframe>
          </div>

          <p className=" text-base mt-[14px]">
            My goal is to thoroughly understand your financial needs and then
            align the resources to help you meet or exceed them. I can help you
            evaluate near-term concerns and plan for long-term goals, be a
            sounding board for investment ideas, assist you in developing and
            executing a strategy that is precisely your own and helps you meet
            your needs.
            <br />
            {more && <br />}
            {more && (
              <span>
                <span className=" font-semibold">Carissa Barney</span> is a
                financial advisor based out of Palm Harbor, Florida who has 8
                years of relevant experience. Barney is an employee of Morgan
                Stanley. During their career, Barney has held roles at Fifth
                Third Bank, Suntrust Bank, Suntrust Investment Services, Inc,
                Morgan Stanley and Morgan Stanley Private Bank, National
                Association. Barney has Series 63 and Series 66 licenses,
                qualifying them as a securities agent, and is approved to work
                in Florida and Texas.
              </span>
            )}
            <br />
            <span
              className=" text-[#0F8EC7] hover:underline transition-all duration-500 flex gap-3 cursor-pointer"
              onClick={() => setMore((x) => !x)}
            >
              {!more ? "About me ) read more" : "show less"}
              {!more ? (
                <ChevronDownIcon className=" w-4" />
              ) : (
                <ChevronUpIcon className=" w-4" />
              )}
            </span>
          </p>
        </div>
        <div className=" md:w-2/5 pl-4 pr-3">
          <h4 className=" text-2xl font-bold mb-[14px]">Services Include</h4>
          <ul className="list-disc mt-4 pl-8">
            {services.map((service) => (
              <li key={service} className=" text-base mb-[6px]">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-3">
        <p className=" text-[#757575] my-[62px]">
          Securities Agent: DC, WI, WA, VT, VA, UT, TX, TN, SC, RI, OH, NY, NJ,
          NC, MI, MD, MA, LA, KY, KS, GA, FL, CO, CA, AZ, OR; General Securities
          Representative; Investment Advisor Representative NMLS#: 841426
        </p>
        <div className=" border-t border-t-[#CCCCCC]">
          <p className=" text-sm my-[32px]">
            Check the background of Our Firm and Investment Professionals on{" "}
            <span>
              <a className=" text-[#0F8EC7] cursor-pointer text-base font-bold underline">
                FINRA&apos;s BrokerCheck
              </a>
              *
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
const serviceTeam = (
  <div className="p-[1.875rem]">
    <h4 className=" text-2xl font-bold my-[1.875rem] mt-5">
      My Story and Services
    </h4>
    <h6 className=" font-bold text-lg my-[0.875rem]">
      Vince Pravata - Registered Client Service Associate
    </h6>
    <div>
      <p className=" text-base">
        <span className=" font-semibold">Phone:</span> +1(424) 279-3916
      </p>
      <p className=" text-base">
        <span className=" font-semibold">Email:</span>
        advisor.carissabarney@gmail.com
      </p>
    </div>
  </div>
);

const MyLocation = (
  <div className="p-[1.875rem]">
    <div className=" mt-10 md:flex md:pr-10">
      <div className=" md:flex-1">
        <h4 className=" text-2xl font-bold mb-[14px] mt-5">LOCATION</h4>
        <p className=" text-base ">
          4114 Woodlands Parkway
          <br />
          Suite 200
          <br />
          Palm Harbor, FL 34685
          <br />
          <br />
          Direct: +1(424) 279-3916
        </p>
      </div>
      <div className=" md:flex-1 md:pl-10">
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "400px",
            width: "100%",
          }}
        >
          <Marker coordinates={[-0.481747846041145, 51.3233379650232]}>
            <div className=" bg-red-600 w-4 h-4 marker" />
          </Marker>
          {/* <Layer
                  type="symbol"
                  id="marker"
                  layout={{ "icon-image": "marker-15" }}
                >
                  <Feature
                    coordinates={[-0.481747846041145, 51.3233379650232]}
                  />
                </Layer> */}
        </Map>
      </div>
    </div>
  </div>
);

const Services = () => {
  const [selected, setSelected] = useState(tabs[0].name);
  return (
    <div className="container -translate-y-[100px] flex py-6 gap-7 h-fit">
      <div id="portfolio-details" className=" bg-white w-full p-4">
        <div className="border-b border-gray-200 max-w-[465.81px]">
          <div className="-mb-px flex overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                href={tab.href}
                onClick={() => setSelected(tab.name)}
                className={classNames(
                  selected === tab.name
                    ? "border-[#0F8EC7] "
                    : "border-transparent hover:border-[#0F8EC7]",
                  "whitespace-nowrap text-[#002B51] py-3 px-[15px] border-b-4 text-base"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        {selected === tabs[0].name && <MyStory />}
        {selected === tabs[1].name && serviceTeam}
        {selected === tabs[2].name && MyLocation}
      </div>
    </div>
  );
};

export default Services;

export const PortfolioCTA = () => {
  return (
    <div className=" mt-10 w-full">
      <TickerTape></TickerTape>
      <div className=" bg-[#0F8EC7] py-[75px]">
        <div className=" max-w-768 text-center text-white mx-auto">
          <h5 className=" text-2xl mt-3">Wealth Management</h5>
          <h5 className=" text-2xl  mt-3">Global Investment Office</h5>
          <h6 className=" my-[90px] font-inter text-[30px]">
            Portfolio Insights
          </h6>
          <button className=" py-[16px] px-[52px] rounded-full text-[19px] border-2 border-[rgba(255,255,255,0.5)] font-bold hover:bg-white hover:text-[#0F8EC7]">
            Read More
          </button>
          <div className=" mt-7">
            <a
              href="https://www.morganstanley.com/pub/content/dam/mscampaign/wealth-management/wmir-assets/On-The-Markets.pdf"
              target="_blank"
              rel="noreferrer"
              className=" underline text-base font-bold hover:decoration-transparent"
            >
              Read &quot;On the Markets&quot;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
