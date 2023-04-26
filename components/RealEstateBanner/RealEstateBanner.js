import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";
import Banner from "./banner";

const reels = [
  {
    imgUrl: "/img/real/banner/1.png",
    title: "Invest in Real Estate with Ethervest",
    paragraph:
      "Ethervest offers a wide range of carefully selected investment properties that allow you to diversify and maximize your returns. With over 4,000 properties available, investing in real estate has never been easier.",
  },
  {
    imgUrl: "/img/real/banner/2.png",
    title: "Unlock Your Wealth with Real Estate Investment",
    paragraph:
      "Real estate investment is a proven way to build long-term wealth and secure your financial future. Ethervest offers access to the largest volume of UK investment properties at favorable exchange rates.",
  },
  {
    title:
      "Unlock Your Wealth with Ethervest's Real Estate Investment Opportunities",
    paragraph:
      "Experience high returns and hassle-free investing with our diverse range of UK property investments. Join now!",

    imgUrl: "/img/real/banner/3.png",
  },
];
const RealEstateBanner = () => {
  return (
    <div className=" w-full h-full">
      <Swiper
        style={{
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={30}
        effect={"fade"}
        // fadeEffect= {{
        //   crossFade: true,
        // }}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >
        {reels.map((reel) => (
          <SwiperSlide
            key={reel.imgUrl}
            className="bg-[linear-gradient(180deg,#4AA0FF_0%,#ADE1FF_100%,#ADE1FF_100%)] rounded-[1rem] overflow-hidden"
          >
            <Banner reel={reel} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RealEstateBanner;
