import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";
import LandingLayout from "../components/landing-layout/LandingLayout";
import RealEstasteHero from "../components/real-estate-component/RealEstasteHero";
import RealEstateAbout from "../components/real-estate-component/RealEstateAbout";
import RealEstateList from "../components/real-estate-component/RealEstateList";

const RealEstate = () => {
  const router = useRouter();
  return (
    <>
      <RealEstasteHero />
      <RealEstateAbout />
      <RealEstateList />
      {router.pathname === "/real-estate" && (
        <Script>
          {`
            easy_background("#real",
            {
                slide: ["/img/real/bg/01.jpg", "/img/real/bg/02.jpg", "/img/real/bg/03.jpg"],
                delay: [4000, 4000, 4000]
            }
        );
            `}
        </Script>
      )}
    </>
  );
};
RealEstate.getLayout = function getLayout(page) {
  return <LandingLayout isSticky={true}>{page}</LandingLayout>;
};

export default RealEstate;
