import React from "react";

function Hero() {
  return (
    <div className="min-h-[82vh] bg-gradient-to-b from-purple-50 via-orange-50 to-transparent p-4">
      <div className="max-w-4xl mx-auto pt-6  flex flex-col  sm:text-center sm:item-center">

        <div className="flex items-center mx-auto my-6 gap-2 bg-yellow-50 border-2 border-yellow-300 rounded-md px-3 py-1 w-fit font-medium shadow-md hover:shadow-lg hover:-translate-y-1 transition group cursor-pointer">

        <div className="items-center h-2 w-2 border border-amber-800 bg-yellow-400 rounded-full"></div>
        <p className="text-yellow-600 font-medium text-base">v0.21.1: <span className="text-yellow-800">Find-in-page bug fixes</span></p>
        <i className="ri-arrow-right-line text-lg text-yellow-600 group-hover:translate-x-1 transition duration-300"></i>
        </div>

        <div className="hidden sm:flex items-center justify-center gap-8 mt-4">
          <p className="text-gray-600 text-base"><i className="ri-file-code-fill mr-2 text-gray-500 text-lg"></i>Code Optional</p>
          <p className="text-gray-600 text-base"><i className="ri-drag-drop-fill mr-2 text-gray-500 text-lg"></i> Drag & drop builder</p>
          <p className="text-gray-600 text-base"><i className="ri-macbook-line mr-2 text-gray-500 text-lg"></i> Windows, Mac, Linux</p>
        </div>

        <div className="mt-2 sm:mt-5">
          <h1 className="text-5xl font-bold text-slate-800 sm:text-7xl">Web app to desktop app in minutes</h1>
          <p className="mt-4 text-lg text-slate-600 sm:text-2xl">Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>

          <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-8">
            <button className="w-full md:w-auto bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold k hover:opacity-95">Download now </button>
            <button className="w-full md:w-auto bg-white text-slate-950 border border-gray-500  font-semibold px-6 py-3 rounded-lg hover:border-gray-900">Read docs</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;