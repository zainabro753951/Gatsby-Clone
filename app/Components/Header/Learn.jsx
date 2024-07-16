import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaChessKing } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { GiInterleavedClaws } from "react-icons/gi";
const Learn = () => {
  return (
    <div id="Learn" className=" hidden w-[500px] h-fit absolute left-0 top-[35px] rounded-md p-5 transition-all duration-300 bg-white shadow-[0_0_10px_#d6d6d6] ">
      <div className="flex flex-col gap-5">
        <div>
          <a className="flex gap-3 hover:underline" href="#">
            <p className="p-3 bg-themePurple/40 flex items-center justify-center rounded-md text-xl">
              <FaChessKing />
            </p>
            <div className="leading-4">
              <div className="flex items-center">
                <h1 className="text-lg font-semibold">Gatsby Hall of Fame</h1>
                <RiArrowDropDownLine />
              </div>
              <p>Check out what the comunity was building</p>
            </div>
          </a>
        </div>
        <div>
          <a className="flex gap-3 hover:underline" href="#">
            <p className="p-3 bg-themePurple/40 flex items-center justify-center rounded-md text-xl">
              <HiAcademicCap />
            </p>
            <div className="leading-4">
              <div className="flex items-center">
                <h1 className="text-lg font-semibold">Webinars</h1>
                <RiArrowDropDownLine />
              </div>
              <p>Learn more with live or on-demand Webinars</p>
            </div>
          </a>
        </div>
        <div>
          <a className="flex gap-3 hover:underline" href="#">
            <p className="p-3 bg-themePurple/40 flex items-center justify-center rounded-md text-xl">
              <GiInterleavedClaws />
            </p>
            <div className="leading-4">
              <div className="flex items-center">
                <h1 className="text-lg font-semibold">Blogs</h1>
                <RiArrowDropDownLine />
              </div>
              <p>Read the latest musing with the Gatsby</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Learn;
