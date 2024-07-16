import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const DNav3 = () => {
  return (
    <div className="flex fixed w-full bg-white z-50 justify-between px-8 py-4 border-y items-center border-gray-100">
      <div>
        <h1 className="text-lg font-medium">Documentation</h1>
      </div>
      <div className="flex gap-6 items-center">
        {["Tutorial", "How-To Guide", "Reference", "Concepts"].map(
          (items, index) => {
            return (
              <a href="#" key={items}>
                {items}
              </a>
            );
          }
        )}
        <select className="flex flex-col gap-2 p-3">
          <option>v5</option>
          <option>v4</option>
          <option>v3</option>
          <option>v2</option>
          <option>v1</option>
        </select>
        <div className="flex gap-6 items-center pl-10">
          <p className="text-2xl"><IoSearchOutline /></p>
          <a
            className="py-[6px] text-[14px] bg-themePurple text-white border-transparent font-medium rounded-md px-6 border transition-all duration-300 hover:bg-white hover:border-themePurple hover:text-themePurple"
            href="#"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default DNav3;
