import React from "react";

const Price = () => {
  return (
    <div className="container">
      <h1 className="title max-w-xl leading-snug">
        Choose a plan that fits your needs
      </h1>
      <div className="flex flex-col gap-8 flex-grow lg:flex-row">
        <div className="w-full border-2 border-gray-300 bg-white p-8 rounded-xl flex flex-col justify-between gap-6 ">
            <h3 className="text-4xl font-semibold mb-4">Free</h3>
            <p className="text-lg text-gray-500 max">
              For personal use or testing your app before deploying to
              customers.
            </p>
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-gray-400">Key Features</p>
            <ul className="flex flex-col gap-2">
              <li className="text-lg text-gray-900">
                <i className="ri-check-line text-xl font-bold text-gray-500 mr-4"></i>
                Free for Personal Use
              </li>
              <li className="text-lg text-gray-900">
                <i className="ri-check-line text-xl font-bold text-gray-500 mr-4"></i>
                Run App Locally
              </li>
              <li className="text-lg text-gray-900">
                <i className="ri-close-line text-xl font-bold text-gray-500 mr-4"></i>
                No Public Distribution
              </li>
              <li className="text-lg text-gray-900">
                <i className="ri-close-line text-xl font-bold text-gray-500 mr-4"></i>
                No Native Installers
              </li>
            </ul>
          </div>
          <div >
            <button className="w-full text-lg font-semibold text-blue-600 border border-gray-400 rounded-lg py-3 hover:border-gray-600 flex flex-col justify-between">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-full border-2 border-gray-300 bg-white p-8 rounded-xl flex flex-col justify-between gap-6">
            <h3 className="text-4xl font-semibold mb-4">Essential</h3>
            <p className="text-lg text-gray-500 max">
              For simple desktop apps.
            </p>
            <h3 className="text-2xl font-semibold text-gray-700 mt-5">
              100$ /
              <span className="font-normal text-gray-600  text-lg">month</span>
            </h3>
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-gray-400">Key Features</p>
            <ul className="flex flex-col gap-2">
              <li className="text-lg text-gray-900">
                <i className="ri-check-line text-xl font-bold text-gray-500 mr-4"></i>
                Windows, Mac & Linux
              </li>
              <li className="text-lg text-gray-900">
                <i className="ri-check-line text-xl font-bold text-gray-500 mr-4"></i>
                Automatic Updates
              </li>
              <li className="text-lg text-gray-900">
                <i className="ri-check-line text-xl font-bold text-gray-500 mr-4"></i>
                Native Installers
              </li>
              <li className="text-lg text-gray-900">
                <i className="ri-check-line text-xl font-bold text-gray-500 mr-4"></i>
                Email/chat support
              </li>
            </ul>
          </div>
          <div>
            <button className="w-full text-lg font-semibold text-blue-600 border border-gray-400 rounded-lg py-3 hover:border-gray-600 flex flex-col justify-between">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-full border-2 border-gray-300 bg-white p-8 rounded-xl flex flex-col justify-between gap-6 relative">
            <p className="text-blue-900 bg-blue-100 text-sm font-bold rounded-full w-fit px-4 py-2 absolute top-0 right-8 -translate-y-1/2">Most Popular</p>
            <h3 className="text-4xl font-semibold mb-4">Professional</h3>
            <p className="text-lg text-gray-500 max">
              For sophisticated desktop apps.
            </p>
            <h3 className="text-2xl font-semibold text-gray-700 mt-5">
              240$ /
              <span className="font-normal text-gray-600  text-lg">month</span>
            </h3>
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-gray-400">
              Everything in Essential Plus
            </p>
            <ul className="flex flex-col gap-2">
              <li className="text-lg text-gray-900">
                <i className="ri-check-line text-xl font-bold text-gray-500 mr-4"></i>
                Branded Download Links
              </li>
              <li className="text-lg text-gray-900">
                <i className="ri-check-line text-xl font-bold text-gray-500 mr-4"></i>
                Analytics
              </li>
              <li className="text-lg text-gray-900">
                <i className="ri-close-line text-xl font-bold text-gray-500 mr-4"></i>
                Access to Plugins
              </li>
              <li className="text-lg text-gray-900">
                <i className="ri-close-line text-xl font-bold text-gray-500 mr-4"></i>
                Access to Restricted API
              </li>
            </ul>
          </div>
          <div>
            <button className="w-full text-lg font-semibold text-white bg-blue-600 border border-gray-400 rounded-lg py-3 hover:bg-blue-700 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
