import React from "react";

const CustomStories = () => {
  const testamonials = [
    {
      icon: "",
      title: "Native APIs",
      pera: " “ What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience. ”",
      img1: "/assets/asset 47.png",
      img2: "/assets/asset 48.jpeg",
      userName: "Rick Pastoor",
      appName: "Rise",
    },
    {
      icon: "",
      title: "Cleaner, less cluttered UI",
      pera: " “ Having a desktop app gives us the freedom to design the experience we want, including better keyboard shortcuts and a cleaner UI. we were able to extend the app’s functionality with custom behavior using ToDesktop’s . It was a no-brainer for us to use ToDesktop. ” ",
      img1: "/assets/asset 49.png",
      img2: "/assets/asset 50.jpeg",
      userName: "Max Musing",
      appName: "Basedash",
    },
    {
      icon: "",
      title: "Code optional",
      pera: " “ It was unbelievably simple for us to get a desktop app up and running, and we didn’t have to write a single line of code. Once we had this MVP, we were able to extend the app’s functionality with custom behavior using ToDesktop’s libraries. ” ",
      img1: "/assets/asset 51.png",
      img2: "/assets/asset 52.jpeg",
      userName: "Pouya Rad",
      appName: "LifeAt",
    },
  ];
  return (
    <div className="container">
      <h1 className="title">Customer stories</h1>

      <div className="flex flex-col md:flex-row">
        <div className="rounded-lg flex md:flex-row flex-col gap-4 ">
              {testamonials.map((user, index) => (
          <div key={index} className="w-full h-full md:w[48%]  rounded-lg gradient-hover-outer group flex flex-col gap-5">
            <div className="flex flex-col items-start gap-5 gradient-hover-inner px-5 py-8 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-200 rounded-full ">
                    <i className="ri-code-s-slash-line text-xl font-bold"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">{user.title}</h3>
                  <p className="text-lg">{user.pera}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="flex items-center justify-center">
                    <div className="-mr-5 w-12 h-12 flex items-center justify-center rounded-full overflow-hidden">
                      <img
                        className="min-w-16 min-h-16 border-2 border-white"
                        src={user.img1}
                        alt=""
                      />
                    </div>
                    <img
                      className="rounded-full border-2 border-white"
                      src={user.img2}
                      alt=""
                    />
                    <div className="ml-2 flex flex-col">
                      <p className="font-semibold">{user.userName}</p>
                      <p>{user.appName}</p>
                    </div>
                    </div>
                  </div>
            </div>
          </div>
              ))}

          {/* <div className="rounded-lg gradient-hover-outer group flex flex-col gap-5">
            <div className="flex flex-col items-start gap-5 gradient-hover-inner px-5 py-8 rounded-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-200 rounded-full ">
                <i className="ri-code-s-slash-line text-xl font-bold"></i>
              </div>
              <h3 className="text-3xl font-semibold">Native APIs</h3>
              <p className="text-lg">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
            <div className="flex items-center gap-2 mt-4">
                <div className="-mr-5 w-12 h-12 flex items-center justify-center rounded-full overflow-hidden">
                <img className="min-w-16 min-h-16 border-2 border-white"  src="/assets/asset 47.png" alt="" />
                </div>
                <img className="rounded-full border-2 border-white" src="/assets/asset 48.jpeg" alt="" />
                <div className="ml-2">
                    <p className="font-semibold">Rick Pastoor</p>
                    <p>Rise</p>
                </div>
            </div>
            </div>
            
          </div>

          <div className="rounded-lg gradient-hover-outer group flex flex-col gap-5">
            <div className="flex flex-col items-start gap-5 gradient-hover-inner px-5 py-8 rounded-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-200 rounded-full ">
                <i className="ri-code-s-slash-line text-xl font-bold"></i>
              </div>
              <h3 className="text-3xl font-semibold">Native APIs</h3>
              <p className="text-lg">What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
            <div className="flex items-center gap-2 mt-4">
                <div className="-mr-5 w-12 h-12 flex items-center justify-center rounded-full overflow-hidden">
                <img className="min-w-16 min-h-16 border-2 border-white"  src="/assets/asset 47.png" alt="" />
                </div>
                <img className="rounded-full border-2 border-white" src="/assets/asset 48.jpeg" alt="" />
                <div className="ml-2">
                    <p className="font-semibold">Rick Pastoor</p>
                    <p>Rise</p>
                </div>
            </div>
            </div>
            
          </div> */}
        </div>
      </div>

    </div>
  );
};

export default CustomStories;
