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
import { DefaultSeo } from "next-seo";

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
        title="Carissa Barney | Palm Harbor, FL | Morgan Stanley Wealth Management"
        description="Carissa Barney can help you achieve your financial goals. Learn about Retirement, Investing, Family, Business Planning, Philanthropy, and Financial Wellness."
        openGraph={{
          type: "website",
          locale: "en-GB",
          url: "https://advisor.carissamariabarney.com",
          siteName: "Carissa Barney Portfolio website",
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
              "Carissa Barney, Palm Harbor, FL (Florida), Morgan Stanley Wealth Management, Financial goals, Retirement, Investing, Family planning, Business planning, Philanthropy, Financial wellness",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
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
