import { useEffect, useRef, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import languagesList from "../utils/languagesList";

// const languages = [
//   { label: "English", value: "/auto/en" },
//   { label: `Русский`, value: "/auto/ru" },
//   { label: "Polski", value: "/auto/pl" },
// ];
const LanguageTranslate = () => {
  const mounted = useRef(true);
  const [selected, setSelected] = useState("");

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "auto",
        autoDisplay: false,
        //   includedLanguages: "ru,en,pl", // If you remove it, by default all google supported language will be included
        // eslint-disable-next-line no-undef
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  const langChange = (evt) => {
    evt.preventDefault();
    const e = evt.target.value;
    console.log(e);
    if (hasCookie("googtrans")) {
      setCookie("googtrans", decodeURI(e));
      setSelected(e);
    } else {
      setCookie("googtrans", e);
      setSelected(e);
    }
    window.location.reload();
  };
  useEffect(() => {
    if (mounted.current) {
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;

      if (hasCookie("googtrans")) {
        setSelected(getCookie("googtrans"));
      } else {
        setSelected("/auto/en");
      }
      //   let translateBar=document.querySelectorAll(".skiptranslate")
      //   if(translateBar){
      //     translateBar.forEach((element) => {
      //         element.style.display="none"
      //       });
      //   }
    }

    mounted.current = false;
  }, []);

  useEffect(() => {
    let translateBar = document.querySelectorAll(".skiptranslate");
    document.body.style.top = 0;
    if (translateBar) {
      translateBar.forEach((element) => {
        element.style.display = "none";
      });
    }
  });
  return (
    <>
      <div
        id="google_translate_element"
        style={{
          width: "0px",
          height: "0px",
          position: "absolute",
          left: "50%",
          zIndex: -99999,
        }}
      ></div>
      <div>
        <select
          id="location"
          name="location"
          className="mt-1 block w-fit rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm notranslate text-black"
          value={selected}
          onChange={langChange}
        >
          <option className="notranslate" selected value={""}>
            Select language
          </option>
          {languagesList.map(({ label, value }) => (
            <option
              key={label}
              className="notranslate text-black"
              value={value}
            >
              {label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default LanguageTranslate;