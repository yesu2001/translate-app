import React, { useState } from "react";
import sound from "../assets/sound_max_fill.svg";
import copy from "../assets/Copy.svg";
import alpha from "../assets/Sort_alfa.svg";
import DropDown from "./DropDown";
import { languages } from "../data/languages";

export default function Detect({ handleTranslate }) {
  return (
    <div className="flex-[0.5] bg-[#212936cc] p-6 rounded-3xl border border-slate-600">
      <div className="flex gap-6 border-b border-slate-700 py-3 px-3 text-sm tracking-wide text-[#4D5562] font-semibold">
        <p>Detect Language</p>
        <p>English</p>
        <p>French</p>
        <DropDown />
      </div>

      <div className="relative pt-4 pb-3 w-full">
        <textarea
          className="w-full h-32 resize-none outline-none bg-transparent text-white font-semibold"
          placeholder="hello how are you?"
        />
        <p className="absolute bottom-2 right-0 text-[#4D5562] teext-sm">
          123/500
        </p>
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
            className="border-2 border-[#4D5562] rounded-xl p-1 cursor-pointer"
          />
        </div>

        <button
          className="flex items-center gap-3 text-white tracking-wide font-bold bg-[#3662E3] p-2 rounded-md border border-slate-400"
          onClick={handleTranslate}
        >
          <img src={alpha} alt="alpha icon" />
          Translate
        </button>
      </div>
    </div>
  );
}

// https://mymemory.translated.net/doc/spec.php

// fetch('https://api.mymemory.translated.net/get?q=Hello,%20how%20are%20you?!&langpair=en|fr')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.log(error)
//   })
