"use client"
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { IoMdContact, IoIosBook } from "react-icons/io";

function Header() {
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavItemClick = (index) => {
    setSelectedNavItem(index);
  };

  const navItems = [
    { label: "Classroom", icon: <IoIosBook /> },
    { label: "Whiteboard", icon: <IoIosBook /> },
    { label: "Videos", icon: <IoIosBook /> },
    { label: "Slide Show", icon: <IoIosBook /> },
    { label: "Document", icon: <IoIosBook /> },
    { label: "Doc Cam", icon: <IoIosBook /> },
  ];

  return (
    <div className="bg-white p-4 mb-4">
      <h1 className="text-2xl font-bold flex justify-between mb-2">
        <div className="flex ">
          <div className="bg-[#f0f1f5] rounded-xl px-3 text-xs flex text-gray-400 items-center mx-2 ">
            {`<`}
          </div>
          <div>Basic Maths 101</div>
        </div>
        <div className="mr-10 flex gap-8 text-lg font-semibold">
          <div
            className="flex justify-center gap-3 items-center cursor-pointer"
            onClick={() => handleNavItemClick(null)}
          >
            <div className="bg-cyan-600 rounded-full text-white p-1">
              <IoCall />
            </div>
            <div>Call Teacher</div>
          </div>
          <div
            className="flex justify-center gap-3 items-center cursor-pointer"
            onClick={() => handleNavItemClick(null)}
          >
            <div className="bg-orange-600 rounded-full text-white p-1">
              <IoMdContact />
            </div>
            <div>Support</div>
          </div>
        </div>
      </h1>
      {/* Add your horizontal navigation links here */}
      <ul className="flex bg-[#f0f1f5] text-gray-500 justify-evenly rounded-full p-1 pr-44 ">
        {navItems.map((item, index) => (
          <li
            key={index}
            onClick={() => handleNavItemClick(index)}
            className={`flex items-center px-3 py-2 cursor-pointer   ${
              selectedNavItem === index ? "bg-white text-black rounded-full" : ""
            }`}
          >
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
