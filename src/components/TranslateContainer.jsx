import React, { useEffect, useState } from "react";
import Detect from "./Detect";
import Translate from "./Translate";
import logo from "../assets/logo.svg";

export default function TranslateContainer() {
  const [detectLang, setDetectLang] = useState("English");
  const [detectCode, setDetectCode] = useState("en");
  const [translateLang, setTranslateLang] = useState("French");
  const [translateCode, setTranslateCode] = useState("fr");

  const [inputValue, setInputValue] = useState("Hello, how are you");
  const [translatedValue, setTranslatedValue] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function translateLanguage(input, codeOne, codeTwo) {
    fetch(
      `https://api.mymemory.translated.net/get?q=${input}!&langpair=${codeOne}|${codeTwo}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data?.responseStatus === "403") {
          setError(data?.responseData?.translatedText);
        }
        if (data?.responseStatus === 200) {
          setError(null);
          setTranslatedValue(data?.responseData?.translatedText);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const detectLanguageAutomatically = async (inputValue) => {
    // const response = await fetch(
    //   `https://mymemory.translated.net/api/v2/detect?q=${inputValue}`
    // );
    // const data = await response.json();
    // console.log(data);
    // return data[0].lang;
  };

  useEffect(() => {
    translateLanguage(inputValue, detectCode, translateCode);
  }, []);

  useEffect(() => {
    detectLanguageAutomatically(inputValue);
  }, [inputValue]);

  const handleSelectDetectLanguage = (name, code) => {
    setDetectLang(name);
    setDetectCode(code);
  };

  const handleSelectTranslateLanguage = (name, code) => {
    setTranslateLang(name);
    setTranslateCode(code);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleTranslate = () => {
    setLoading(true);
    translateLanguage(inputValue, detectCode, translateCode);
  };

  return (
    <div className="absolute top-[20%] w-full space-y-20 flex flex-col items-center xs:px-2 sm:px-10 ">
      {error && (
        <p className="absolute top-[-10] flex items-center gap-4 px-4 py-1 bg-red-600 rounded-md text-sm text-white font-semibold">
          {error}{" "}
          <span onClick={() => setError(null)} className="cursor-pointer">
            x
          </span>
        </p>
      )}
      <img src={logo} alt="logo" />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 justify-center gap-10 w-full mb-20 lg:mx-20">
        <Detect
          language={detectLang}
          handleSelectLanguage={handleSelectDetectLanguage}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleTranslate={handleTranslate}
          handleCopy={handleCopy}
          loading={loading}
        />
        <Translate
          language={translateLang}
          handleSelectLanguage={handleSelectTranslateLanguage}
          translatedValue={translatedValue}
          setTranslatedValue={setTranslatedValue}
          handleCopy={handleCopy}
        />
      </div>
    </div>
  );
}
