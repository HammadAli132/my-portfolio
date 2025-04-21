"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const CustomDropdown = ({ options = [], selected, setSelected, placeholder = "Select option" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    if (selected === option) {
      setIsOpen(false);
      return;
    }
    setSelected(option);
    setIsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full sm:w-1/3" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-[10rem] flex justify-between items-center rounded-md border border-white/[0.1] px-4 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      >
        <span>{selected || placeholder}</span>
        <ChevronUpDownIcon className="w-5 h-5 text-gray-400" />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full min-w-max rounded-md bg-[#111827] shadow-lg border border-white/[0.1] max-h-60 overflow-auto">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`px-4 py-2 text-sm cursor-pointer hover:bg-tertiary ${
                selected === option ? "bg-primary font-medium" : ""
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
