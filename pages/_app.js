//tailwind
import "../scss/tailwind.scss";
import "../scss/icons.scss";
// scroll bar
import "simplebar/src/simplebar.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// highlight
import "../utils/highlight";

// editor
import "react-quill/dist/quill.snow.css";
import "mapbox-gl/dist/mapbox-gl.css";
// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

import PropTypes from "prop-types";
import cookie from "cookie";
// next
import Head from "next/head";
import App from "next/app";
// utils
import { getSettings } from "../utils/settings";
//react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// contexts
import { SettingsProvider } from "../contexts/SettingsContext";
import { CollapseDrawerProvider } from "../contexts/CollapseDrawerContext";
// theme
import ThemeProvider from "../theme";
// components
// import Settings from '../components/settings';
import RtlLayout from "../components/RtlLayout";
import ProgressBar from "../components/ProgressBar";
import ThemeColorPresets from "../components/ThemeColorPresets";
import MotionLazyContainer from "../components/animate/MotionLazyContainer";
import Script from "next/script";
import { DefaultSeo, LocalBusinessJsonLd } from "next-seo";

// ----------------------------------------------------------------------

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  settings: PropTypes.object,
};

//there is a meta tag change
export default function MyApp(props) {
  const { Component, pageProps, settings } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <DefaultSeo
        title="Carissa Barney | Wealth Management"
        description="Carissa Barney can help you achieve your financial goals. Learn about Retirement, Investing, Family, Business Planning, Philanthropy, and Financial Wellness."
        openGraph={{
          type: "website",
          locale: "en-GB",
          url: "https://advisor.carissamariabarney.com",
          siteName: "Carissa Barney Portfolio website",
          profile: {
            firstName: "Carissa",
            lastName: "Barney",
            gender: "female",
          },
          images: [
            {
              url: "https://dynl.mktgcdn.com/p/h9DGLCvrsbcnScUAA_bJUrp3-oEBUKbmSjTR75hpjD4/267x450.png",
              alt: "Og Image Alt",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "carissa, Barney, maria, Carissa Barney, Palm Harbor, FL (Florida), Wealth Management, Wealth Management, Financial goals, Retirement, Investing, Family planning, Business planning, Philanthropy, Financial wellness",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />

      <LocalBusinessJsonLd
        type="Wealth Management"
        id="https://advisor.carissamariabarney.com"
        name="Carissa Maria Barney - Wealth Management"
        description="Carissa Maria Barney can help you achieve your financial goals. Learn about Retirement, Investing, Family, Business Planning, Philanthropy, and Financial Wellness."
        url=""
        telephone="+14242793916"
        address={{
          streetAddress:
            "4114 Woodlands Pkwy # 200, Palm Harbor, FL 34685, United States",
          addressLocality: "EAST LAKE POINT",
          addressRegion: " FL",
          postalCode: "34685",
          addressCountry: "US",
        }}
        geo={{
          //28.066357,-82.7059193
          latitude: "28.066357",
          longitude: "-82.7059193",
        }}
        images={[
          "https://dynl.mktgcdn.com/p/h9DGLCvrsbcnScUAA_bJUrp3-oEBUKbmSjTR75hpjD4/267x450.png",
        ]}
        openingHours={[
          {
            opens: "08:00",
            closes: "17:59",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
          },
        ]}
        rating={{
          ratingValue: "4.5",
          ratingCount: "4000",
        }}
        review={[
          {
            author: "Ruki M",
            datePublished: "2015-05-04",
            name: "Exceeded my expectations",
            reviewBody:
              "Carissa Barney goes above and beyond to ensure my family's financial well-being. She helped us develop a comprehensive estate plan that addresses all our needs. Her knowledge and dedication are unmatched.",
          },
          {
            author: "Wish I could give 6 stars",
            datePublished: "2016-06-15",
            name: "Rose k",
            reviewBody:
              "I highly recommend Carissa Barney for business planning. She helped me strategize and optimize my business finances, resulting in improved profitability and growth. Her insights have been instrumental in my success.",
            reviewRating: {
              ratingValue: "4",
            },
          },
        ]}
      />
      <Script src="/js/easy_background.js" strategy="beforeInteractive" />
      <Script strategy="beforeInteractive" src="/js/feather.min.js" />
      <CollapseDrawerProvider>
        <SettingsProvider defaultSettings={settings}>
          <ThemeProvider>
            <MotionLazyContainer>
              <ThemeColorPresets>
                <RtlLayout>
                  <ProgressBar />
                  {getLayout(<Component {...pageProps} />)}
                  <ToastContainer
                    position="top-right"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    theme="colored"
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                </RtlLayout>
              </ThemeColorPresets>
            </MotionLazyContainer>
          </ThemeProvider>
        </SettingsProvider>
      </CollapseDrawerProvider>
      <Script>{`feather.replace();`}</Script>
      <Script>
        {`
        document.querySelectorAll('a.scroll[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
      
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });
        `}
      </Script>
    </>
  );
}

// ----------------------------------------------------------------------

MyApp.getInitialProps = async (context) => {
  const appProps = await App.getInitialProps(context);

  const cookies = cookie.parse(
    context.ctx.req ? context.ctx.req.headers.cookie || "" : document.cookie
  );

  const settings = getSettings(cookies);

  return {
    ...appProps,
    settings,
  };
};
