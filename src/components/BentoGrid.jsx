import React from "react";

const BentoGrid = () => {
  const features = [
    "Code Signing",
    "•",
    "Offline Support",
    "•",
    "Download Analytics",
    "•",
    "Global Hotkeys",
    "•",
    "Custom Menus",
    "•",
    "Multi-windos support",
    "•",
    "Trays",
    "•",
    "Deep Linking",
    "•",
    "Launch at Startup",
    "•",
    "Screen Recoding",
    "•",
  ];
  return (
    <div className="container">
      <h1 className="title max-w-xl leading-snug">ToDesktop handles the details</h1>

      <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
        <div className="row-start-1 row-end-3 rounded-lg gradient-hover-outer group">
          <div className="flex flex-col items-center bg-slate-100 rounded-lg p-8  justify-center gap-4 w-full h-full gradient-hover-inner">
            <h1 className="text-2xl font-semibold ">Native Notifications</h1>
            <img src="/assets/asset 37.png" alt="" />
          </div>
        </div>
        <div className="row-start-1 row-end-4 rounded-lg gradient-hover-outer group">
          <div className="flex flex-col items-center bg-slate-100 rounded-lg p-8  justify-center gap-4 w-full h-full gradient-hover-inner">
            <h1 className="text-2xl font-semibold ">Auto Updates</h1>
            <p className="text-center text-lg px-2">
              We’ll ensure the underlying browser is up to date and deliver
              performance improvements, security patches, & additional features.
            </p>
            <img src="/assets/asset 38.png" alt="" />
          </div>
        </div>
        <div className="row-start-1 row-end-3 rounded-lg gradient-hover-outer group">
          <div className="flex flex-col items-center bg-slate-100 rounded-lg p-8  justify-center gap-4 w-full h-full gradient-hover-inner">
            <h1 className="text-2xl font-semibold ">Plugins</h1>
            <img src="/assets/asset 39.png" alt="" />
          </div>
        </div>
        <div className="row-start-3 row-end-6 rounded-lg gradient-hover-outer group">
          <div className="flex flex-col items-center bg-slate-100 rounded-lg p-8  justify-center gap-4 w-full h-full gradient-hover-inner">
            <h1 className="text-2xl font-semibold ">Access to Native APIs</h1>
            <p className="text-center text-lg px-2">
              ToDesktop ensures the underlying browser, performance
              improvements, security patches and additional features are always
              up to date.
            </p>
            <img src="/assets/asset 40.png" alt="" />
          </div>
        </div>
        <div className="row-start-4 row-end-6 rounded-lg gradient-hover-outer group">
          <div className="flex flex-col items-center bg-slate-100 rounded-lg p-8  justify-center gap-4 w-full h-full gradient-hover-inner">
            <h1 className="text-2xl font-semibold ">
              Customizable look and feel
            </h1>
            <img src="/assets/asset 41.png" alt="" />
          </div>
        </div>
        <div className="row-start-3 row-end-6 rounded-lg gradient-hover-outer group">
          <div className="flex flex-col items-center bg-slate-100 rounded-lg p-8  justify-center gap-4 w-full h-full gradient-hover-inner">
            <h1 className="text-2xl font-semibold ">Native Installers</h1>
            <p className="text-center text-lg px-2">
              We even provide a magic link which will detect your users
              operating system & download the most up to date version of your
              app.
            </p>
            <img src="/assets/asset 43.png" alt="" />
          </div>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden flex justify-center mt-10">
        <div className="flex whitespace-nowrap gap-12 p-6 text-infinite-loop">
          {features.map((features, index) => (
            <h3
              key={index}
              className="whitespace-nowrap text-xl md:text-2xl my-4 font-semibold"
            >
              {features}
            </h3>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BentoGrid;
