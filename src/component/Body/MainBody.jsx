import React from "react";
import Image from "next/image";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";
function MainBody() {
  return (
    <>
    
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
        <div className="flex gap-6  mt-20 flex-wrap m-10">
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
       <Image className="cursor-pointer" src="/learn.png" height={1200} width={1000} />
      </div>
    </>
  );
}

export default MainBody;
