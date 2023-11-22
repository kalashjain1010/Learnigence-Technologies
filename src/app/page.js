"use client";
import { FaWordpressSimple } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { LuBellRing } from "react-icons/lu";
import { RiCompass2Line } from "react-icons/ri";
import { RiTaskLine } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { FaChartSimple } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdContact, IoIosBook } from "react-icons/io";
import Image from "next/image";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";

import React, { useState } from "react";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const iconList = [
    { icon: <HiMenuAlt1 size={20} />, label: "Menu" },
    { icon: <LuBellRing size={20} />, label: "Bell" },
    { icon: <RiCompass2Line size={20} />, label: "Compass" },
    { icon: <RiTaskLine size={20} />, label: "Task" },
    { icon: <IoEyeOutline size={20} />, label: "Eye" },
    { icon: <IoPeopleOutline size={20} />, label: "People" },
    { icon: <FaChartSimple size={20} />, label: "Chart" },
  ];
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const handleNavItemClick = (index) => {
    setSelectedNavItem(index);
  };

  const navItems2 = [
    { label: "Classroom", icon: <IoIosBook /> },
    { label: "Whiteboard", icon: <IoIosBook /> },
    { label: "Videos", icon: <IoIosBook /> },
    { label: "Slide Show", icon: <IoIosBook /> },
    { label: "Document", icon: <IoIosBook /> },
    { label: "Doc Cam", icon: <IoIosBook /> },
  ];

  return (
    <>
      <div className="flex h-screen">
        <div className="bg-[#f0f1f5] flex flex-col items-center w-16 p-4">
          <FaWordpressSimple size={30} />
          <ul className="mt-4 flex flex-col items-center">
            {iconList.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(index)}
                className={`py-2 my-5 cursor-pointer text-gray-400 ${
                  selectedItem === index ? "text-black" : ""
                }`}
              >
                {item.icon}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 p-4">
          {/* Horizontal Navbar */}
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
              {navItems2.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleNavItemClick(index)}
                  className={`flex items-center px-3 py-2 cursor-pointer   ${
                    selectedNavItem === index
                      ? "bg-white text-black rounded-full"
                      : ""
                  }`}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex  justify-between h-[75dvh] ">
            <div className="bg-re-300 w-1/4 flex flex-col  items-center ">
              <div>
                <div className="m-3">
                  <img className="rounded-3xl" src="./study.jpeg" />
                </div>
                <div className="m-3 ">
                  <img className="rounded-3xl" src="./call.jpeg" />
                </div>
              </div>

              {/* icons */}
              <div className="flex gap-6  mt-10 flex-wrap m-10">
                <div>
                  <div className="bg-[#f0f1f5] p-1 rounded-lg cursor-pointer">
                    <AiOutlineVideoCameraAdd size={32} />
                  </div>
                  <div className="flex justify-center">cam</div>
                </div>
                <div>
                  <div className="bg-[#f0f1f5] p-1 rounded-lg cursor-pointer">
                    <CiMicrophoneOn size={32} />
                  </div>
                  <div className="flex justify-center">cam</div>
                </div>
                <div>
                  <div className="bg-[#f0f1f5] p-1 rounded-lg cursor-pointer">
                    <FaRegShareSquare size={32} />
                  </div>
                  <div className="flex justify-center">cam</div>
                </div>
                <div>
                  <div className="bg-[#f0f1f5] p-1 rounded-lg cursor-pointer">
                    <FaRocketchat size={32} />
                  </div>
                  <div className="flex justify-center">cam</div>
                </div>
                <div>
                  <div className="bg-cyan-600 text-white p-1 rounded-lg cursor-pointer">
                    <IoExitOutline size={32} />
                  </div>
                  <div className="flex justify-center">cam</div>
                </div>
              </div>
            </div>
            <div className=" w-full flex flex-col justify-center items-center ">
              <Image
                className="cursor-pointer"
                src="/learn.png"
                height={1200}
                width={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
