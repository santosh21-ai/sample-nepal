import React from "react";
import UserLayout from "../../components/client/dashboard/Layout";
import {
  AnnotationIcon,
  GlobeAltIcon,
  PaperClipIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
];

const UserDashboard = () => {
  return (
    <UserLayout>
      <div className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get your documents
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
                    <div className="flex justify-center font-bold text-lg text-slate-800">
                      NOC
                      <a
                        href="#"
                        className="ml-4 w-20 flex items-center justify-center px-8 pb-1 border rounded-full border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:text-base md:px-10"
                      >
                        pending
                      </a>
                    </div>
                    <ul
                      role="list"
                      className="border border-gray-200 rounded-md divide-y divide-gray-200 px-6"
                    >
                      <li className=" pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <PaperClipIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 flex-1 w-0 truncate">
                            resume_back_end_developer.pdf
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Download
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque
                </dd>
              </div>

              <div className="relative">
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-3">
                    <div className="flex justify-center font-bold text-lg text-slate-800">
                      Citizenship
                      <a
                        href="#"
                        className="ml-4 w-20 flex items-center justify-center px-8 pb-1 border rounded-full border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-600 md:text-base md:px-10"
                      >
                        pending
                      </a>
                    </div>
                    <ul
                      role="list"
                      className="border border-gray-200 rounded-md divide-y divide-gray-200 px-6"
                    >
                      <li className=" pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <PaperClipIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 flex-1 w-0 truncate">
                            resume_back_end_developer.pdf
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Download
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserDashboard;
