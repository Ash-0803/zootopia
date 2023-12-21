import { AppBar, Typography } from "@mui/material";
import React from "react";

import Notifications from "./components/Notifications";
import Sidebar from "./components/SideBar";
import VideoPlayer from "./components/VideoPlayer";

// const feature = {
//   name: "Push to deploy.",
//   description:
//     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
//   icon: CloudArrowUpIcon,
// };

export default function Learn() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32  ">
      <div className="mx-auto max-w-7xl px-6 pb-10 mb-20 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 h-full flex flex-col justify-center ">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Learn from the best
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Professionals are here!
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Learn from conservation experts in live classes for direct
                insights into extinct and endangered animals, exploring
                ecological complexities and conservation challenges.
              </p>
              {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              </dl> */}
            </div>
          </div>
          <img
            src="/Teaching-kids.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
      {/* LIVE CLASSS-------- */}
      <div className="flex flex-col items-center w-full">
        <div
          className="rounded-lg mx-10 md:mx-20 flex flex-row justify-center items-center w-96 border-2 border-black"
          position="static"
          color="inherit"
        >
          <div variant="h2" align="center">
            Video Chat
          </div>
        </div>
        <VideoPlayer />
        <Sidebar>
          <Notifications />
        </Sidebar>
      </div>
    </div>
  );
}
