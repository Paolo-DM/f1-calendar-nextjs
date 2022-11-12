import React from "react";
import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { forwardRef } from "react";
import {
  MenuIcon,
  UserGroupIcon,
  PresentationChartLineIcon,
  HomeIcon,
  CalendarIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const currentYear = new Date().getFullYear();

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

MyLink.displayName = "MyLink";

const solutions = [
  {
    name: "Driver Standings",
    description:
      "Get a better understanding of where your traffic is coming from.",
    path: "/driver-standings",
    icon: UserGroupIcon,
  },
  {
    name: "Constructor Standings",
    description: "Speak directly to your customers in a more meaningful way.",
    path: "/constructor-standings",
    icon: PresentationChartLineIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className="relative bg-[#0b2834]">
      <div className=" px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex items-center justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <img
                  className="h-6 w-auto sm:h-8"
                  src="../../f1_logo.svg"
                  alt="f1 logo"
                />
              </a>
            </Link>

            <h1 className="text-2xl text-white sm:text-3xl">F1Calendar</h1>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className=" inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-300  focus:outline-none ">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden items-center justify-end text-xl md:flex md:flex-1 lg:w-0">
            <Link href="/">
              <a className="whitespace-nowrap px-4 text-white hover:text-gray-300">
                Home
              </a>
            </Link>

            <Popover.Group>
              <Popover className="relative px-4 ">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-300" : "text-white",
                        " group inline-flex items-center  hover:text-gray-300"
                      )}
                    >
                      <span>Standings</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-300" : "text-white",
                          "ml-1 h-5 w-5 group-hover:text-gray-300"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 max-w-md transform  px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-4 bg-[#0b2834] px-4  py-4 ">
                            {solutions.map((item) => (
                              <div
                                key={item.name}
                                className="flex text-white gap-2"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 mr-2"
                                  aria-hidden="true"
                                />
                                <Link href={item.path}>
                                  <a className="-m-3 flex items-start rounded-lg p-3 hover:text-gray-400 ">
                                    {item.name}
                                  </a>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <Link href={`/calendar/${currentYear}`}>
              <a className=" inline-flex items-center justify-center whitespace-nowrap rounded-md border px-3  py-2 text-white  shadow-sm  hover:border-gray-300 hover:bg-[#0e3241] hover:text-gray-300">
                Calendar
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform bg-[#0b2834] p-2 text-white transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg shadow-lg ring-1  ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                  <img
                    className="h-6 w-auto"
                    src="../f1_logo.svg"
                    alt="f1 logo"
                  />
                  <h1>F1Calendar</h1>
                </div>
                <div className="-mr-2">
                  <Popover.Button className=" inline-flex items-center justify-center rounded-md p-2  hover:text-gray-500  focus:outline-none  ">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6  ">
                <nav className="grid gap-y-8 border-t pt-3">
                  <Popover.Button
                    as={MyLink}
                    href="/"
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-[#42636e]  text-base font-medium"
                  >
                    <HomeIcon
                      className="h-6 w-6 mr-3 flex-shrink-0"
                      aria-hidden="true"
                    />
                    Home
                  </Popover.Button>

                  {solutions.map((item) => (
                    <Popover.Button
                      as={MyLink}
                      href={item.path}
                      key={item.name}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-[#42636e]  text-base font-medium"
                    >
                      <item.icon
                        className="h-6 w-6 mr-3 flex-shrink-0 "
                        aria-hidden="true"
                      />
                      {item.name}
                    </Popover.Button>
                  ))}
                  <Popover.Button
                    as={MyLink}
                    href={`/calendar/${currentYear}`}
                    className="-m-3 flex items-center rounded-md p-3 hover:bg-[#42636e]  text-base font-medium"
                  >
                    <CalendarIcon
                      className="h-6 w-6 mr-3 flex-shrink-0"
                      aria-hidden="true"
                    />
                    Calendar
                  </Popover.Button>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
