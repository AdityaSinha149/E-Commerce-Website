import React from "react";

const Dropdown = ({ options = [], defaultOption = "Select" }) => {
  return (
    <div className="relative w-24">
      <select className="appearance-none bg-gray-200 text-black px-4 py-2 rounded-lg w-full border border-gray-400 focus:outline-none">
        <option>{defaultOption}</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
        ▼
      </span>
    </div>
  );
};

export default Dropdown;
