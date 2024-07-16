import React from "react";
import { GrDocument } from "react-icons/gr";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxMagicWand } from "react-icons/rx";
import { CgTemplate } from "react-icons/cg";
import { FaPaintRoller } from "react-icons/fa6";
import { RiWirelessChargingLine } from "react-icons/ri";
import Link from "next/link";
const OpenSource = () => {
  return (
    <div id="OpenSource" className="hidden w-[600px] absolute left-0 top-[35px] rounded-md px-5 py-7 h-[500px] transition-all duration-300 bg-white shadow-[0_0_10px_#d6d6d6]">
      <div className=" flex flex-col gap-5 ">
        <div className="flex flex-col gap-3">
          <Link className="flex gap-3 hover:underline" href="/Documentation">
            <p className="p-3 bg-[#F9F2FF] text-themePurple rounded-md text-xl">
              <GrDocument />
            </p>
            <div className="leading-4">
              <div className="flex items-center">
                <h1 className="text-lg font-semibold">Documentations</h1>
                <RiArrowDropDownLine />
              </div>
              <p>Start Building with the echosystem</p>
            </div>
          </Link>
          <div className="grid gap-2 ml-14 grid-cols-3">
            <div className="flex items-center gap-2">
              <a href="#">How-to Guides</a>
              <RiArrowDropDownLine />
            </div>
            <div className="flex items-center gap-2">
              <a href="#">Reference Guides</a>
              <RiArrowDropDownLine />
            </div>
            <div className="flex items-center gap-2">
              <a href="#">Concepts</a>
              <RiArrowDropDownLine />
            </div>
            <div className="flex items-center gap-2">
              <a href="#">Quick Start</a>
              <RiArrowDropDownLine />
            </div>
            <div className="flex items-center gap-2">
              <a href="#">Tutorials</a>
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <a className="flex gap-3 hover:underline" href="#">
            <p className="p-3 bg-[#F9F2FF] text-themePurple flex items-center justify-center rounded-md text-xl">
              <RxMagicWand />
            </p>
            <div className="leading-4">
              <div className="flex items-center">
                <h1 className="text-lg font-semibold">Gatsby Plugins</h1>
                <RiArrowDropDownLine />
              </div>
              <p>Customize add Fuctionality with industry Leading tools</p>
            </div>
          </a>
          <div className="grid gap-2 ml-14 grid-cols-3">
            <div className="flex items-center gap-2">
              <a href="#">Word Press</a>
              <RiArrowDropDownLine />
            </div>
            <div className="flex items-center gap-2">
              <a href="#">Content Full</a>
              <RiArrowDropDownLine />
            </div>
            <div className="flex items-center gap-2">
              <a href="#">Shopify</a>
              <RiArrowDropDownLine />
            </div>
            <div className="flex items-center gap-2">
              <a href="#">Algolia</a>
              <RiArrowDropDownLine />
            </div>
            <div className="flex items-center gap-2">
              <a href="#">Google Analytics</a>
              <RiArrowDropDownLine />
            </div>
            <div className="flex items-center gap-2">
              <a href="#">Segments</a>
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        <div>
          <a className="flex gap-3 hover:underline" href="#">
            <p className="p-3 bg-[#F9F2FF] text-themePurple flex items-center justify-center rounded-md text-xl">
              <CgTemplate />
            </p>
            <div className="leading-4">
              <div className="flex items-center">
                <h1 className="text-lg font-semibold">Gatsby Plugins</h1>
                <RiArrowDropDownLine />
              </div>
              <p>Customize add Fuctionality with industry Leading tools</p>
            </div>
          </a>
        </div>
        <div>
          <a className="flex gap-3 hover:underline" href="#">
            <p className="p-3 bg-[#F9F2FF] text-themePurple flex items-center justify-center rounded-md text-xl">
              <FaPaintRoller />
            </p>
            <div className="leading-4">
              <div className="flex items-center">
                <h1 className="text-lg font-semibold">Gatsby Plugins</h1>
                <RiArrowDropDownLine />
              </div>
              <p>Customize add Fuctionality with industry Leading tools</p>
            </div>
          </a>
        </div>
        <div>
          <a className="flex gap-3 hover:underline" href="#">
            <p className="p-3 bg-[#F9F2FF] text-themePurple flex items-center justify-center rounded-md text-xl">
              <RiWirelessChargingLine />
            </p>
            <div className="leading-4">
              <div className="flex items-center">
                <h1 className="text-lg font-semibold">Gatsby Plugins</h1>
                <RiArrowDropDownLine />
              </div>
              <p>Customize add Fuctionality with industry Leading tools</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
