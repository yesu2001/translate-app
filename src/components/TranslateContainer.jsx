import React, { useState } from "react";
import Detect from "./Detect";
import Translate from "./Translate";
import logo from "../assets/logo.svg";
import { languages } from "../data/languages";

export default function TranslateContainer() {
  const [language, setLanguage] = useState(languages[0].name);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [translatedValue, setTranslatedValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCopy = () => {};
  const handleTranslate = (translate) => {};

  return (
    <div className="absolute top-5 top-[20%] w-full space-y-20 flex flex-col items-center xs:px-2 sm:px-10 ">
      <img src={logo} alt="logo" />
      <div className="flex flex-col md:flex-row item-center justify-center gap-5 w-full xs:px-4 ms:px-8 md:px-20">
        <Detect />
        <Translate />
      </div>
    </div>
  );
}
