import React from "react";
import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className="w-[99%] active:outline-2 outline-black flex flex-col gap-6 items-center justify-center shadow-lg mx-auto h-[50vh] bg-cloud-gradient rounded-xl">
      <h1 id="cloud-h1" className="text-5xl py-2 font-bold bg-cloud-h1">
        How can we help you?
      </h1>
      <div className="h-12 w-1/2 rounded-full overflow-hidden border border-slate-400 flex gap-3 items-center bg-white">
        <p className="p-3 text-2xl h-full flex items-center justify-center">
          <IoSearch />
        </p>
        <input
          className="w-full outline-none h-full"
          type="search"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
