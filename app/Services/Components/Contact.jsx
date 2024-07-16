"use client";
import React, { useState } from "react";

const Contact = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [Phone, setPhone] = useState("");
  const [company, setcompany] = useState("");
  const [message, setmessage] = useState("");
  return (
    <div className="w-full min-h-screen py-24 bg-[#FFFAFD]">
      <div className="text-center">
        <h1 className="text-lg uppercase text-[#BC027F] font-semibold">
          lets Chat
        </h1>
        <h1 className="text-5xl py-3 tracking-wide font-bold">
          Learn More About Conceirge Today
        </h1>
        <p>
          Let’s schedule a time to discuss your goals and challenges and how
          Gatsby
          <br />
          Concierge can ensure your success. Simply fill out the form below and
          we will be
          <br />
          in contact shortly.
        </p>
      </div>
      <div className="w-full h-full flex justify-center items-center mt-20">
        <form className="w-1/2 h-fit p-5 gap-5 flex flex-col">
          <div className="flex flex-col">
            <label className="font-bold text-gray-700">First Name*</label>
            <input
            className="py-2 rounded-sm outline-none px-4 border border-slate-300"
              type="text"
              value={firstName}
              onChange={(val) => {
                setfirstName(val.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-gray-700">Last Name*</label>
            <input
            className="py-2 rounded-sm outline-none px-4 border border-slate-300"
              type="text"
              value={lastName}
              onChange={(val) => {
                setlastName(val.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-gray-700">Business Email*</label>
            <input
            className="py-2 rounded-sm outline-none px-4 border border-slate-300"
              type="email"
              value={email}
              onChange={(val) => {
                setemail(val.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-gray-700">Phone*</label>
            <input
            className="py-2 rounded-sm outline-none px-4 border border-slate-300"
              type="number"
              value={Phone}
              onChange={(val) => {
                setPhone(val.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-gray-700">Company*</label>
            <input
            className="py-2 rounded-sm outline-none px-4 border border-slate-300"
              type="text"
              value={company}
              onChange={(val) => {
                setcompany(val.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-gray-700">Current Framwork*</label>
            <select className="py-2 rounded-sm outline-none px-4 border border-slate-300 font-semibold text-gray-700 flex gap-1 flex-col">
              <option>Please Select</option>
              <option>Gatsby</option>
              <option>Angular</option>
              <option>Next.js</option>
              <option>Nuxt</option>
              <option>Vue</option>
              <option>Create React App</option>
              <option>Astro</option>
              <option>Remix</option>
              <option>Sevelte</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-bold text-gray-700">What can we help you achieve?*</label>
            <textarea
            className="py-2 rounded-sm outline-none px-4 border border-slate-300"
              value={message}
              onChange={(val) => {
                setmessage(val.target.value);
              }}
            ></textarea>
          </div>
          <a className="w-[25%] text-white mt-7 py-2 bg-themePurple rounded-md text-center " href="#">Submit</a>
        </form>
      </div>
    </div>
  );
};

export default Contact;
