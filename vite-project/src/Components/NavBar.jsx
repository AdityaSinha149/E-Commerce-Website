import React from "react";
import Dropdown from "./Dropdown";
const NavBar = () => {
  return (
    <div className="flex flex-dir-col justify-between px-4 py-2 bg-gray-800 ">
      <h1 className="text-2xl font-bold">Shoppo</h1>
      <div className="flex flex-dir-col px-4">
        <Dropdown></Dropdown>
        <input type="text" className="border border-gray-400 p-2" placeholder="Search" />
        <button className="border">🔍</button>
      </div>
      <button className="text-xl font-bold border">Cart</button>
    </div>
  );
};

export default NavBar;
