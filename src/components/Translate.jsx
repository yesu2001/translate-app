import React, { useState } from "react";
import sound from "../assets/sound_max_fill.svg";
import copy from "../assets/Copy.svg";
import revertIcon from "../assets/Horizontal_top_left_main.svg";
import DropDown from "./DropDown";

export default function Translate({
  language,
  handleSelectLanguage,
  translatedValue,
  setTranslatedValue,
  handleCopy,
}) {
  const defaultLang = [
    { name: "English", code: "en" },
    { name: "French", code: "fr" },
  ];

  const [message, setMessage] = useState(null);

  return (
    <div className="flex-[0.5] bg-[#121826cc] p-6 rounded-3xl border border-slate-600">
      <div className="flex items-center justify-between gap-6 border-b border-slate-700 pb-3 px-3 text-sm tracking-wide text-[#4D5562] font-semibold">
        <div className="flex gap-6 items-center">
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
        <button>
          <img
            src={revertIcon}
            alt="revert icon"
            className="border-2 border-[#4D5562] rounded-xl p-1"
          />
        </button>
      </div>

      <div className="relative pt-4 pb-3 w-full">
        <textarea
          className="w-full h-32 resize-none outline-none bg-transparent text-white font-semibold"
          value={translatedValue}
          onChange={(e) => setTranslatedValue(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={sound}
            alt=""
            className="border-2 border-[#4D5562] rounded-xl p-1 cursor-not-allowed"
          />
          <img
            src={copy}
            alt=""
            onClick={() => {
              handleCopy(translatedValue);
              setMessage("Copied!");
              setTimeout(() => {
                setMessage(null);
              }, 2000);
            }}
            className="border-2 border-[#4D5562] rounded-xl p-1 cursor-pointer"
          />
          {message && <p className="text-slate-300">{message}</p>}
        </div>
      </div>
    </div>
  );
}
