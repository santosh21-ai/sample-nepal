import React, { useContext, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { tableData } from "../../data/tableData";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import Link from "next/link";
import FavoritesContext from "../../context/allContext";

const sortOptions = [
  { name: "Most Popular", href: "#", current: false },
  { name: "Review Docs", href: "/review", current: false },
  { name: "Newest", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Table = () => {
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Clients List</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Submitted on
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {favoriteCtx.favorites.map((data) => (
                  <tr key={data.email}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt="AltImage"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {data.firstName + " " + data.lastName}
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            243324
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data.email}
                      </p>
                      {/* <p className="text-gray-600 whitespace-no-wrap">USD</p> */}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {/* {data.submitted_on} */}
                        {data.date}
                      </p>
                      <p className="text-gray-600 whitespace-no-wrap">
                        {/* {data.due} */}
                        Due in 3 days
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className={`${
                            data.status == `Approved`
                              ? `bg-emerald-300`
                              : data.status == `Pending`
                              ? `bg-teal-400`
                              : `bg-red-500`
                          } absolute inset-0 opacity-50 rounded-full`}
                        ></span>
                        <span className="relative">{data.status}</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <Link href={`/review/${data.email}`}>
                        <a
                          href="#"
                          className="w-24 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-1 md:text-base md:px-10"
                        >
                          Review
                        </a>
                      </Link>

                      {/* <Menu
                        as="div"
                        className="relative inline-block text-left overflow-visible"
                      >
                        <div>
                          <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                            <DotsVerticalIcon className="h-6 w-6 z-0" />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ">
                            <div className="py-1">
                              <Menu.Item>
                                <Link href={`/review/${data.email}`}>
                                  <a className="font-medium text-gray-900">
                                    Review Docs
                                  </a>
                                </Link>
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu> */}
                    </td>
                  </tr>
                ))}

                {/* <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Michael Roberts
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">
                          000003
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">$214,000</p>
                    <p className="text-gray-600 whitespace-no-wrap">USD</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Sept 25, 2019
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      Due in 6 days
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Paid</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                    <button
                      type="button"
                      className="inline-block text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Devin Childs
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">
                          000002
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">$20,000</p>
                    <p className="text-gray-600 whitespace-no-wrap">USD</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Sept 14, 2019
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      Due in 2 weeks
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Pending</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                    <button
                      type="button"
                      className="inline-block text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          Frederick Nicholas
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">
                          000001
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">$12,000</p>
                    <p className="text-gray-600 whitespace-no-wrap">USD</p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Sept 6, 2019
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      Due 3 weeks ago
                    </p>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">Overdue</span>
                    </span>
                  </td>
                  <td className="px-5 py-5 bg-white text-sm text-right">
                    <button
                      type="button"
                      className="inline-block text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        className="inline-block h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                      </svg>
                    </button>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
