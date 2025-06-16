import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div>
      <nav className="px-6 py-4 bg-white flex items-center justify-between">
        <a href="#" className="flex items-center flex-1">
          <img src="public/assets/asset 0.png" alt="Logo" />
          <span className="text-black text-2xl font-normal ml-2 font-display">
            ToDesktop
          </span>
        </a>

        <div>
          <ul className="lg:flex items-center justify-center gap-9 text-lg font-normal hidden">
            <li className="hover:text-blue-700">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">Docs</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">Changelog</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">Blog</a>
            </li>
            <li className="hover:text-blue-700">
              <a href="#">Login</a>
            </li>
          </ul>
        </div>

        <div className="flex-1 hidden lg:flex justify-end">
          <button className="flex items-center gap-3 border-slate-300 border-2 text-base px-6 py-1 rounded-lg  hover:border-slate-400">
            <img className="h-8" src="public/assets/asset 1.svg" alt="Icon" />
            Electron Developers
            <i className="ri-arrow-right-line text-xl font-semibold"></i>
          </button>
        </div>

        <button className="p-2 lg:hidden" onClick={handleMenuToggle}>
          <i className="ri-menu-line text-2xl"></i>
        </button>

        {/* Mobile Reponsive From Here */}

        {menuOpen && (
          <div className=" fixed z-10 md:hidden bg-white inset-0 px-6 py-4">
            <div className="flex justify-between">
              <a href="#" className="flex items-center justify-between">
                <img src="public/assets/asset 0.png" alt="Logo" />
                <span className="text-black text-2xl font-normal ml-2 font-display">
                  ToDesktop
                </span>
              </a>

              <button className="p-2 md:hidden" onClick={handleMenuToggle}>
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            <div className="mt-8">
              <ul className="md:flex flex flex-col gap-2 text-xl font-normal ">
                <li className="p-2 hover:bg-gray-100 rounded">
                  <a href="#">Pricing</a>
                </li>
                <li className="p-2 hover:bg-gray-100 rounded">
                  <a href="#">Docs</a>
                </li>
                <li className="p-2 hover:bg-gray-100 rounded">
                  <a href="#">Changelog</a>
                </li>
                <li className="p-2 hover:bg-gray-100 rounded">
                  <a href="#">Blogs</a>
                </li>
                <li className="p-2 hover:bg-gray-100 rounded">
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>
            <div className="h-[1px] bg-gray-400 my-8"></div>
            <button className="mt-6 flex items-center justify-center gap-3 border-slate-300 border-2 text-base px-6 py-1 rounded-lg  hover:border-slate-400">
              <img className="h-6" src="public/assets/asset 1.svg" alt="Icon" />
              Electron Developers
              <i className="ri-arrow-right-line text-xl font-semibold"></i>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
