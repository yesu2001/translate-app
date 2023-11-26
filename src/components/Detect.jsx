import React, { useEffect, useState } from "react";
import sound from "../assets/sound_max_fill.svg";
import copy from "../assets/Copy.svg";
import alpha from "../assets/Sort_alfa.svg";
import DropDown from "./DropDown";
import { languages } from "../data/languages";

export default function Detect({
  language,
  handleSelectLanguage,
  inputValue,
  setInputValue,
  handleTranslate,
  handleCopy,
  handleSpeakText,
  loading,
}) {
  const [minLetters, setMinLetters] = useState(0);
  const defaultLang = [
    { name: "English", code: "en" },
    { name: "French", code: "fr" },
  ];

  // console.log(language);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (minLetters > 500) {
      alert("Not more than 500 characters");
    }
    setMinLetters(inputValue.length);
  }, [inputValue]);
  return (
    <div className="flex-[0.5] bg-[#212936cc] p-6 rounded-3xl border border-slate-600">
      <div className="flex items-center gap-6 border-b border-slate-700 pb-3 px-3 text-sm tracking-wide text-[#4D5562] font-semibold">
        <p className="flex items-center">Detect Language</p>
        {defaultLang.map((item) => (
          <p
            key={item.code}
            onClick={() => handleSelectLanguage(item.name, item.code)}
            className={`cursor-pointer ${
              language === item.name ? "bg-[#4D5562] text-white" : ""
            } px-2 py-1 rounded-md`}
          >
            {item.name}
          </p>
        ))}
        <DropDown
          handleSelectLanguage={handleSelectLanguage}
          language={language}
        />
      </div>

      <div className="relative pt-4 pb-3 w-full">
        <textarea
          className="w-full h-32 resize-none outline-none bg-transparent text-white font-semibold"
          placeholder={inputValue}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p className="absolute bottom-2 right-0 text-[#4D5562] teext-sm">
          {minLetters}/500
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={sound}
            alt=""
            className="border-2 border-[#4D5562] rounded-xl p-1 cursor-pointer"
            onClick={() => handleSpeakText(inputValue)}
          />
          <img
            src={copy}
            alt=""
            onClick={() => {
              handleCopy(inputValue);
              setMessage("Copied!");
              setTimeout(() => {
                setMessage(null);
              }, 2000);
            }}
            className="border-2 border-[#4D5562] rounded-xl p-1 cursor-pointer"
          />
          {message && <p className="text-slate-300">{message}</p>}
        </div>

        <button
          className="flex items-center gap-3 text-white tracking-wide font-bold bg-[#3662E3] p-2 rounded-md border border-slate-400"
          onClick={handleTranslate}
        >
          <img src={alpha} alt="alpha icon" />
          {loading ? "Loading.." : "Translate"}
        </button>
      </div>
    </div>
  );
}
