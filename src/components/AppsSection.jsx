import React from "react";

const AppsSection = () => {
  const allApps = [
    { name: "Unbounce1", img: "/assets/Apps-Logo/asset 3.png" },
    { name: "LifeAt", img: "/assets/Apps-Logo/asset 4.png" },
    { name: "Convy", img: "/assets/Apps-Logo/asset 5.png" },
    { name: "Morgen", img: "/assets/Apps-Logo/asset 6.png" },
    { name: "Campsite", img: "/assets/Apps-Logo/asset 7.png" },
    { name: "Rise", img: "/assets/Apps-Logo/asset 8.png" },
    { name: "ClickUp", img: "/assets/Apps-Logo/asset 9.png" },
    { name: "Notion", img: "/assets/Apps-Logo/asset 10.png" },
    { name: "Sunsama", img: "/assets/Apps-Logo/asset 11.png" },
    { name: "Beeper", img: "/assets/Apps-Logo/asset 12.png" },
    { name: "Cal", img: "/assets/Apps-Logo/asset 13.png" },
    { name: "WebStudio", img: "/assets/Apps-Logo/asset 14.png" },
    { name: "abc", img: "/assets/Apps-Logo/asset 15.png" },
    { name: "Unbounce1", img: "/assets/Apps-Logo/asset 16.png" },
    { name: "Unbounce1", img: "/assets/Apps-Logo/asset 17.png" },
    { name: "Unbounce1", img: "/assets/Apps-Logo/asset 18.png" },
    { name: "Unbounce", img: "/assets/Apps-Logo/asset 19.png" },
    { name: "Moises", img: "/assets/Apps-Logo/asset 20.png" },
    { name: "Basedash", img: "/assets/Apps-Logo/asset 21.png" },
    { name: "Cursor", img: "/assets/Apps-Logo/asset 22.png" },
    { name: "Linear", img: "/assets/Apps-Logo/asset 23.png" },
    { name: "Voiceflow", img: "/assets/Apps-Logo/asset 24.png" },
    { name: "Kitemaker", img: "/assets/Apps-Logo/asset 25.png" },
    { name: "Cron", img: "/assets/Apps-Logo/asset 26.png" },
    { name: "Bold", img: "/assets/Apps-Logo/asset 27.png" },
    { name: "Versel", img: "/assets/Apps-Logo/asset 28.png" },
    { name: "Infinity", img: "/assets/Apps-Logo/asset 29.png" },
  ];

  // Desktop layout
  const firstRowApps = allApps.slice(0, 15);
  const secoundRowApps = allApps.slice(16, 30);

  // Mobile Layout
  const mobileFirstRowApps = allApps.slice(0, 9);
  const mobileSecoundRowApps = allApps.slice(10, 18);
  const mobileThirdRowApps = allApps.slice(20, 30);

  const duplicateFirstRow = [...firstRowApps, ...firstRowApps];
  const duplicateSecoundRow = [...secoundRowApps, ...secoundRowApps];
  const duplicateFirstRowMobile = [...mobileFirstRowApps, ...mobileFirstRowApps];
  const duplicateSecoundRowMobile = [...mobileSecoundRowApps, ...mobileSecoundRowApps];
  const duplicateThirdRowMobile = [...mobileThirdRowApps, ...mobileThirdRowApps];

  return (
    <div>
      <div className="flex justify-center gap-4">
        <img
          className="translate-y-3"
          src="public/assets/asset 2.svg"
          alt="down arrow"
        />
        <span className="font-semibold">APPS POWERED BY TODESKTOP</span>
        <img
          className="-scale-x-100 translate-y-3"
          src="public/assets/asset 2.svg"
          alt="down arrow"
        />
      </div>

      {/* Desktop Layout 2-rows */}
      <div className="hidden md:block mt-16">
        <div className=" overflow-hidden ">
          <div className="-translate-x-32">
            <div className="flex flex-nowrap gap-4 pb-5 animate-scroll-right">
              {[...duplicateFirstRow].map((app, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center flex-shrink-0 w-36 h-36"
                >
                  <div className="rounded-xl flex flex-col items-center justify-center bg-white border border-gray-300 w-full h-full">
                    <img className="w-20 h-20" src={app.img} alt={app.name} />
                    <p className="font-semibold text-lg text-gray-900">
                      {app.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" overflow-hidden">
          <div className="-translate-x-40">
            <div className="flex flex-nowrap gap-4 pb-5 animate-scroll-left">
              {[...duplicateSecoundRow].map((app, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center flex-shrink-0 w-36 h-36"
                >
                  <div className="rounded-xl flex flex-col items-center justify-center bg-white border border-gray-300 w-full h-full">
                    <img
                      className="w-20 md:h-20"
                      src={app.img}
                      alt={app.name}
                    />
                    <p className="font-semibold text-lg text-gray-900">
                      {app.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive 3 Rows     */}
      <div className="mt-14 gap-5 flex flex-col md:hidden">
        {/* Row-1 */}
        <div className="flex md:hidden flex-row justify-center overflow-hidden gap-4 animate-scroll-mobile-right min-w-[200%]">
          {[...duplicateFirstRowMobile].map((app, index) => (
            <div
              key={index}
              className="flex flex-row items-center flex-shrink-0 w-28 h-28"
            >
              <div className="rounded-xl flex flex-col items-center justify-center bg-white border border-gray-300 w-full h-full">
                <img className="w-16 h-16" src={app.img} alt={app.name} />
                <p className="font-semibold text-base text-gray-900">
                  {app.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Row-2 */}
        <div className="flex md:hidden flex-row justify-center overflow-hidden gap-4 animate-scroll-mobile-left min-w-[200%]">
          {[...duplicateSecoundRowMobile].map((app, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 w-28 h-28"
            >
              <div className="rounded-xl flex flex-col items-center justify-center bg-white border border-gray-300 w-full h-full">
                <img className="w-16 h-16" src={app.img} alt={app.name} />
                <p className="font-semibold text-base text-gray-900">
                  {app.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Row-3 */}
        <div className="flex md:hidden  justify-center overflow-hidden gap-4 animate-scroll-mobile-right-slow min-w-[200%]">
          {[...duplicateThirdRowMobile].map((app, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 w-28 h-28"
            >
              <div className="rounded-xl flex flex-col items-center justify-center bg-white border border-gray-300 w-full h-full">
                <img className="w-16 h-16" src={app.img} alt={app.name} />
                <p className="font-semibold text-base text-gray-900">
                  {app.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppsSection;
