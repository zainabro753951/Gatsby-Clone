let supportData = [
  {
    img: "/img/support/img1.svg",
    name: "Gatsby Concierge Service",
    arrow: <FaArrowRight />,
    dis: "Professional support, performance audits, and services for Gatsby websites and apps.",
  },
  {
    img: "/img/support/img2.svg",
    name: "Gatsby Cloud Knowledge Base",
    arrow: <FaArrowRight />,
    dis: "Explore the functionality available in Gatsby Cloud.",
  },
  {
    img: "/img/support/img3.svg",
    name: "Open Source Documentation",
    arrow: <FaArrowRight />,
    dis: "Find answers in our comprehensive docs or learn something new in one of our tutorials.",
  },
  {
    img: "/img/support/img4.svg",
    name: "Status Page",
    arrow: <FaArrowRight />,
    dis: "Check the real-time status of Gatsby Cloud and subscribe to updates.",
  },
  {
    img: "/img/support/img5.svg",
    name: "Community Forum",
    arrow: <FaArrowRight />,
    dis: "Get help from like-minded developers!.",
  },
];
import React from "react";
import Header from "../Components/Header/Header";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../Components/Footer";
import Link from "next/link";
const Support = () => {
  return (
    <div>
      <Header />
      <div className="text-center py-20 tracking-wide">
        <h3 className="text-xl text-gray-400">LOOKING FOR HELP?</h3>
        <h1 className="text-themePurple py-3 text-3xl font-bold">Discover</h1>
        <h1 className=" text-3xl font-semibold pb-7">
          How Gatsby Can Help Support Your Team
        </h1>
        <div className="w-9/12 grid grid-cols-2 gap-x-14 gap-y-28 mt-16 mx-auto text-start">
          {supportData.map((items, index) => {
            return (
              <div className={`flex gap-7 items-center`}>
                <div className="w-fit">
                  <img className="max-w-full" src={items.img} />
                </div>
                <div className="w-full">
                  <Link href={`${index === 0 ? "/Services" : "" || index === 1 ? "/Cloud" : "" }`} className="text-2xl pb-3 font-bold">{items.name}</Link>
                  <p className="text-gray-500 text-[14px]">{items.dis}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Support;
