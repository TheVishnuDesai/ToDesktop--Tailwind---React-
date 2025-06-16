import React from "react";

const HowItWorks = () => {
  const data = [
    {
      step: "Step-1",
      title: "Bootstrap straight from your web app",
      peragraph:
        "Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.",
      points: [
        "Multiple windows",
        "Menubar/tray menus",
        "Offline support",
        "Customisable menus",
        "Launch on startup",
        "Tabs (Mac only)",
      ],
      img: "/assets/asset 66.svg",
    },
    {
      step: "Step-2",
      title: "Add desktop code to customise your web app",
      peragraph:
        "No need to create a new repository, just add code from our desktop APIs to your codebase and get access to system.",
      points: [
        "Native notifications",
        "Application menu",
        "Dock/Icon",
        "File system access",
        "Global keyboard shortcuts",
        "Context menu",
      ],
      img: "/assets/asset 66.svg",
    },
    {
      step: "Step-3",
      title: "Publish",
      peragraph:
        "One-click will publish your desktop app to your customers and give you a download link to put on your website.",
      points: [
        "Super-fast global CDN",
        "Magic universal links",
        "Manage version numbers",
        "Download links on your domain",
        "Download analytics",
        "Native installers for all platforms",
      ],
      img: "/assets/asset 66.svg",
    },
  ];

  return (
    <div className="container">
      <h1 className="title">How it works</h1>

      {data.map((item, index) => (
        <div key={index} className="md:relative bg-white p-6 flex-row justify-between items-center border rounded-xl border-gray-300 md:flex mb-6 ">
          <div className="flex flex-col gap-6">
            <div className="md:absolute top-12  py-1 rounded-md text-center font-semibold bg-yellow-50 border-2 border-yellow-300 w-24">
              {item.step}
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold">{item.title}</h1>
            <p className="text-base w-[310px] md:w-[550px] md:text-lg">
              {item.peragraph}
            </p>
            <div>
              <div>
                <ul className=" grid grid-cols-2  gap-3 text-base font-medium text-gray-600">
                  {item.points.map((point, i) => (
                    <li  className="flex items-start gap-2 ">
                      <i className="text-lg mr-2  ri-check-fill"></i>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <img className="w-[550px]" src={item.img} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;
