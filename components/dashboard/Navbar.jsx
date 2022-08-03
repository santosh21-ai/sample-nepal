import { Fragment, React, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";
import {
  XIcon,
  MenuIcon,
  CloudDownloadIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
  AnnotationIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

const navigation = {
  pages: [
    { name: "Dashboard", href: "/dashboard", icon: CloudDownloadIcon },
    { name: "International", href: "#", icon: GlobeAltIcon },
    { name: "States", href: "#", icon: LightningBoltIcon },
    { name: "Policy", href: "#", icon: ScaleIcon },
    { name: "Appoinments", href: "#", icon: AnnotationIcon },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* mobile sidenav from left */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <div className="flex">
                        <page.icon className="h-5 w-5 text-gray-500 hover:text-indigo-500 lg:block md:hidden mt-1" />
                        <Link href={page.href}>
                          <a
                            href={page.href}
                            className="-m-2 p-2 ml-1 block font-medium text-gray-900"
                          >
                            {page.name}
                          </a>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      {/* end of mobile sidenav from left */}
      <div className="relative flex items-baseline justify-between py-2 border-b border-gray-200">
        <button
          type="button"
          className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open menu</span>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        <h1 className="text-4xl font-extrabold tracking-tight text-indigo-600">
          Admin
        </h1>
        {/* <div className="w-2/5 flex-row border-2 lg:block">
          <a href="">
            <SearchIcon className="w-6 h-6" />
          </a>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-4/5"
              placeholder="Search"
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div> */}
        <div className=" w-2/5 flex border border-gray-400 rounded py-1 px-1 hidden  md:block md:flex">
          <span className="flex items-center justify-center  border-r-0  px-3 text-gray-700">
            <SearchIcon className="w-6 h-6 cursor-pointer" />
          </span>
          <input
            className="w-full border-0 p-2 focus:outline-none focus:border-white focus:ring-white"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/login">userlogin</Link>
          <BellIcon className="h-7 w-7 text-gray-400" />
          <div className="flex overflow-hidden">
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt="AltImage"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
