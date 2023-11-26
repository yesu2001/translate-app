import { useState } from "react";
import { languages } from "../data/languages";

export default function DropDown({ handleSelectLanguage, language }) {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (name, code) => {
    setOption(name);
    handleSelectLanguage(name, code);
    setIsOpen(false);
  };

  console.log(language !== "English");

  return (
    <div
      className={`relative inline-block text-left cursor-pointer px-2 py-1 rounded-md ${
        language === "English" || language === "French"
          ? ""
          : "text-white bg-[#4D5562]"
      }`}
    >
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center items-center w-full  border-none bg-transparent"
        >
          <span>{option || "select"}</span>
          <svg
            class="h-4 w-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="scrollbar absolute right-0 w-45 h-[300px] overflow-y-auto rounded-md shadow-lg z-10">
          <div className="rounded-md bg-white shadow-xs overflow-hidden">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {languages.map((item) => (
                <p
                  key={item.code}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                  role="menuitem"
                  onClick={() => handleSelectOption(item.name, item.code)}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
