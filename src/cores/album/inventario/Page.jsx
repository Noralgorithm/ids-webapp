import React from "react";
import FilterPlayer from "./FilterPlayer";
import Players from "./Players";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Page() {
  return (
    <div className="bg-white w-11/12 h-5/6 flex flex-col items-center justify-around">
      <FilterPlayer />
      <div className="w-full flex justify-around h-5/6 items-center">
        <IoIosArrowBack
          size="2rem"
          className="bg-offsideColorWine rounded-full text-gray-100 cursor-pointer hover:bg-red-800"
        />
        <Players />
        <IoIosArrowForward
          size="2rem"
          className="bg-offsideColorWine rounded-full text-gray-100 cursor-pointer hover:bg-red-800"
        />
      </div>
    </div>
  );
}

export default Page;