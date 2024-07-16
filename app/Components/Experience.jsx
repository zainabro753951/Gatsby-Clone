import React from "react";

const Experience = () => {
  return (
    <div className="w-full min-h-screen py-28 flex flex-col items-center px-6 bg-[#11081F] text-white">
      <h1 className="text-5xl text-center font-bold">
        Start building{" "}
        <span className="text-[#A456F0]">amazing web experiences.</span>
      </h1>
      <div className="w-7/12 h-full mt-10">
        <div className="flex text-center gap-5 mb-9">
          <div className="flex flex-col gap-5 p-7">
            <img className="w-[80px] mx-auto" src="/img/Exp/img1.svg" alt="" />
            <h1 className="text-2xl font-semibold">Gatsby Framework</h1>
            <p>
              Build a{" "}
              <span className="font-bold text-themePurple">
                fast, secure, and powerful website
              </span>{" "}
              using our React-based, open-source framework.
            </p>
            <p>
              Want further flexibility? Achieve that with{" "}
              <span className="font-bold text-themePurple">
                SSR, DSG, and Cloud Functions.
              </span>
            </p>
            <a
              className="underline hover:no-underline text-themePurple"
              href="#"
            >
              Learn More
            </a>
          </div>
          <div className="flex flex-col gap-5 p-7">
            <img className="w-[80px] mx-auto" src="/img/Exp/img2.svg" alt="" />
            <h1 className="text-2xl font-semibold">Gatsby Framework</h1>
            <p>
              Build a{" "}
              <span className="font-bold text-themePurple">
                fast, secure, and powerful website
              </span>{" "}
              using our React-based, open-source framework.
            </p>
            <p>
              Want further flexibility? Achieve that with{" "}
              <span className="font-bold text-themePurple">
                SSR, DSG, and Cloud Functions.
              </span>
            </p>
            <a
              className="underline hover:no-underline text-themePurple"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="pt-16 text-center flex flex-col gap-8">
          <h1 className="text-center text-4xl font-bold">
            Get started with Netlify now.
          </h1>
          <p className="text-[17px]">
            Your site's visitors will thank you.
            <br />
            (So will your CEO.)
          </p>
          <div className="flex w-full items-center text-[17px] justify-center gap-6">
            <a className="px-5 py-3 bg-[#7026B9] rounded-md" href="#">Deploy on Netlify for free</a>
            <a className="underline hover:no-underline text-[#7026B9]" href="#">Request a Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
