import React from "react";
import sound from "../assets/sound_max_fill.svg";
import copy from "../assets/Copy.svg";
import revertIcon from "../assets/Horizontal_top_left_main.svg";
import DropDown from "./DropDown";

export default function Translate({ handleTranslate }) {
  return (
    <div className="flex-[0.5] bg-[#121826cc] p-6 rounded-3xl border border-slate-600">
      <div className="flex items-top justify-between border-b border-slate-700 py-2 px-3 text-sm tracking-wide text-[#4D5562] font-semibold">
        <div className="flex gap-6 items-center">
          <p>English</p>
          <p>French</p>
          <DropDown />
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
          placeholder="hello how are you?"
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
            className="border-2 border-[#4D5562] rounded-xl p-1 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
