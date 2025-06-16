import React from "react";

const Download = () => {
  return (
    <div className="container ">
      <div className="flex flex-col bg-black rounded-xl lg:flex-row">
        <div className="flex flex-col lg:flex-row">
        {/* left */}
          <div className="flex flex-col p-8 gap-12 lg:p-12 ">
          <div className="flex flex-col gap-5  lg:gap-6">
            <p className="uppercase font-semibold text-gray-300 text-sm lg:text-base">Ready to start building?</p>
            <h1 className="text-3xl text-white font-semibold md:text-4xl lg:text-5xl">Create your desktop app for free*</h1>
            <p className="text-gray-400 text-sm lg:text-lg">
              ToDesktop Builder will take you step-by-step through the process
              of creating your first desktop app in just a few minutes
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <button  className="px-3 py-2 rounded-lg text-lg  bg-blue-600 text-white lg:py-4 lg:px-4 hover:bg-blue-700 cursor-pointer"><i className="ri-download-2-line text-lg mr-2"></i> Download ToDesktop Builder</button>
            <p className="text-gray-300 text-xs italic lg:text-sm">*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
          </div>
          </div>
        {/* right */}
        <div className="pl-5 lg:pt-10 w-full lg:w-[80%]">
          <img className="" src="/assets/asset 53.png" alt="" />
        </div>
        </div>
      </div>

    </div>
  );
};

export default Download;
