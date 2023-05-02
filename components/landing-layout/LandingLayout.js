import React, { useEffect, useRef, useState } from "react";
import Footer from "../landing-page/Footer";
import Navbar from "../landing-page/Navbar";
import LoadingScreen from "../LoadingScreen";
import TawkMessenger from "../TawkMessenger";

const LandingLayout = ({ children, isSticky }) => {
  const isMounted = useRef(false);
  const timeoutId = useRef(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("mounted on loading screen");
    timeoutId.current = setTimeout(() => {
      setLoading(false);
      console.log("setLoading");
      // eslint-disable-next-line no-undef
      feather.replace();
    }, 6000);
    // if (!isMounted.current) {

    // }
    isMounted.current = true;
    // eslint-disable-next-line no-undef
    feather.replace();
    return () => {
      console.log("timeout cleared");
      clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <Navbar isSticky={isSticky} />
      {children}
      <TawkMessenger />
      <Footer />
    </>
  );
};

export default LandingLayout;
