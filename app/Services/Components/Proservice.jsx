let proServiceData = [
  {
    icon: "/img/ProServices.svg",
    name: "GATSBY CONCIERGE",
    heading: "Professional Services for Gatsby",
    dis: "Optimize your site performance and ensure a smooth production experience with your own personal concierge service for your Gatsby site.",
    btn: "Contact us",
  },
];
import React from "react";

const Proservice = () => {
  return (
    <div className="w-full min-h-screen text-white bg-[#11081F] gap-4 flex flex-col justify-center items-center">
      {proServiceData.map((items) => {
        return (
          <>
            <img className="w-[100px]" src={items.icon} alt="service" />
            <h2 className="text-[#d459ab] text-lg">{items.name}</h2>
            <h1 className="text-5xl font-bold">{items.heading}</h1>
            <p className="w-[48%] text-center">{items.dis}</p>
            <a className="py-3 px-6 bg-[#BC027F] text-lg rounded-md mt-6" href="#">{items.btn}</a>
          </>
        );
      })}
    </div>
  );
};

export default Proservice;
