import { useState } from "react";
import { languages } from "../data/languages";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          class="inline-flex justify-center items-center w-full  border-none bg-transparent"
        >
          <span class="text-[#4D5562]">Select</span>
          <svg
            class="h-4 w-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div class="scrollbar absolute right-0 w-50 h-[300px] overflow-y-auto rounded-md shadow-lg z-10">
          <div class="rounded-md bg-white shadow-xs overflow-hidden">
            <div
              class="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {languages.map((item) => (
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
