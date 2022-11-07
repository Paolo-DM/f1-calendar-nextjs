import React from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/solid";

function YearPicker() {
  return (
    <div className="flex justify-evenly items-center w-1/3 mx-auto py-4">
      <ChevronDoubleLeftIcon className="w-10" />
      <ChevronLeftIcon className="w-10" />
      <h1 className="text-3xl font-['Raleway'] font-semibold">2022</h1>
      <ChevronRightIcon className="w-10" />
      <ChevronDoubleRightIcon className="w-10" />
    </div>
  );
}

export default YearPicker;
