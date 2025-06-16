import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10 border-t container">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">

          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center">
              <img src="/assets/asset 0.png" alt="Logo" className="h-8" />
              <span className="ml-2 text-xl font-semibold text-gray-800">
                ToDesktop
              </span>
            </a>

            <div className="flex items-center gap-3">
              <img src="/assets/asset 71.svg" alt="GitHub" className="h-8" />
              <img src="/assets/asset 72.svg" alt="Discord" className="h-8" />
              <h3 className="text-base font-medium text-gray-600">
                Documentation
              </h3>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start lg:items-end gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <img src="/assets/asset 54.svg" alt="YC" className="h-4" />
              <span>A Y Combinator company.</span>
            </div>
            <p className="text-gray-500">
              © 2024 ToDesktop, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
