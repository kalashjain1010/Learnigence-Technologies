
import MainBody from "@/component/Body/MainBody";
import Header from "@/component/header/page";
import VerticalBar from "@/component/verticalBar/page";

import React from "react";

export default function Home() {

  return (
    <>
      <div className="flex h-screen">
        <VerticalBar />

        <div className="flex-1 p-4">
          {/* Horizontal Navbar */}
          <Header />


          {/* Main Content */}
          <div className="flex gap-2 justify-between h-[75dvh] ">
            <MainBody />
          </div>
        </div>
      </div>
    </>
  );
}
