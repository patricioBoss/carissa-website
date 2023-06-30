import Image from "next/image";
import React from "react";

const blogList = [
  {
    intro: {
      title: "4.60% Annual Percentage Yield Preferred Savings",
      exp: "Morgan Stanley clients with eligible brokerage accounts can earn 4.60% APY through deposits into our Preferred Savings Program for qualifying cash. Contact our team to learn more or click here for more details. Terms apply.",
      link: "https://www.morganstanley.com/campaigns/wealth-management/qualifying-cash?cid=mg-smfa-preferre-11807",
      image: "/img/morgan-section-img.png",
    },
    main: {
      title: "Eating in and Dining Out in 2023",
      exp: "Inflation, consumer sentiment and a shift from pandemic norms should define the year ahead for food-related businesses, with packaged foods and pizza delivery expected to fare better than restaurants overall.",
      link: "https://www.morganstanley.com/ideas/egg-prices-dining-out-vs-food-at-home",
    },
  },
  {
    intro: {
      title: "Start The New Year Off With A Complete Financial View",
      exp: "Spending + Budgeting allows you to manage your everyday spending across all your accounts - both at Morgan Stanley and at outside financial institutions all in one place. Start Today.",
      link: "https://login.morganstanleyclientserv.com/ux/?goTo=spending&iseDeliveryRequest=1",
      image: "/img/morgan-section-img-2.png",
    },
    main: {
      title: "The Age of AI and Other Trends in Tech and Beyond",
      exp: "AI beyond the hype, a potential breakthrough in health tech, a near-term opportunity in PCs and more trends in technology and beyond.",
      link: "https://www.morganstanley.com/ideas/morgan-stanley-tmt-conference-2023-san-francisco",
    },
  },
  {
    intro: {
      title: "Help Improve Your After-Tax Returns with TaxManagement Services",
      exp: "Help keep more of your returns and potentially reduce tax liability with a tax-managed investment portfolio. Learn more.",
      link: "https://www.morganstanley.com/what-we-do/wealth-management/uma/tax-management-services?icid=whmt-tl-taxmana-5612",
      image: "/img/morgan-section-img-3.png",
    },
    main: {
      title: "Help Improve Your After-Tax Returns with TaxManagement Services",
      exp: "Help keep more of your returns and potentially reduce tax liability with a tax-managed investment portfolio. Learn more.",
      link: "https://www.morganstanley.com/what-we-do/wealth-management/online-security/online-security-resources.html",
    },
  },
];

const BlogTemplate = ({ article, index }) => (
  <div className="py-[15px]">
    <div
      className={
        " md:flex md:gap-[2.2%] text-base text-black md:min-h-[390px] "
      }
    >
      <div
        className={
          " relative md:w-[32%] border border-[#CCCCCC] p-[30px] " +
          (index % 2 ? " order-1" : "order-2")
        }
      >
        <a
          href={article.main.link}
          target="_blank"
          rel="noreferrer"
          className=" absolute transition-all duration-500 top-0 left-0 right-0 bottom-0 bg-[#4c4c4c] opacity-0 hover:opacity-20"
        ></a>
        <h3 className=" text-[24px] font-bold mb-[30px] ">
          {article.main.title}
        </h3>
        <p className=" text-base">{article.main.exp}</p>
      </div>
      <div
        className={
          " relative md:w-[64%] bg-[#fff] border border-[#CCCCCC] flex flex-col md:flex-row " +
          (index % 2 ? " order-2" : "order-1")
        }
      >
        <a
          href={article.intro.link}
          target="_blank"
          rel="noreferrer"
          className=" absolute transition-all duration-500 top-0 left-0 right-0 bottom-0 bg-[#4c4c4c] opacity-0 hover:opacity-20"
        ></a>
        <div className=" md:w-1/2 p-[30px] order-2 md:order-1 text-black">
          <h3 className=" text-[24px] font-bold mb-[30px]">
            {article.intro.title.toUpperCase()}
          </h3>
          <p className=" text-base">{article.intro.exp}</p>
        </div>
        <div className="relative pt-[130%] order-1  md:order-2 md:pt-0 md:w-1/2">
          <Image
            src={article.intro.image}
            fill
            className=" object-cover object-center"
          />
        </div>
      </div>
    </div>
  </div>
);

const MorganBlogs = ({ list }) => {
  console.log({ list });
  return (
    <div className=" bg-white">
      <h3 className=" text-[46px] text-center pt-16 font-thin">
        More from Morgan Stanley
      </h3>
      <div className=" container">
        {blogList.map((article, index) => (
          <BlogTemplate
            key={article.intro.image}
            index={index}
            article={article}
          />
        ))}
      </div>
    </div>
  );
};

export default MorganBlogs;
