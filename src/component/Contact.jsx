import React from "react";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaArrowLeft, FaTwitterSquare } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();
  if (location.pathname === "/contact") {
    return (
      <>
        <Link
          to="/"
          className="h-10 w-10 ml-[10vw] mt-[6vw] absolute ri-arrow-left-line hover:text-purple-400 text-xl duration-300"
        >
          <FaArrowLeft />
        </Link>
        <div className=" w-4/6 pt-[10vw] flex mx-auto mb-10">
          <div className=" w-[40%] h-[94%] gap-3  flex flex-col items-end pr-10 py-2 border-r">
            <h1 className="text-4xl font-semibold mb-[4vw] ">Contact Us </h1>
            <h1 className="text-2xl font-light flex items-center gap-4">
              Care@ravian.ai
              <MdEmail />
            </h1>
            <h1 className="text-2xl font-light flex items-center gap-4">
              FaceBook <FaSquareFacebook />
            </h1>
            <h1 className="text-2xl font-light flex items-center gap-4">
              Twitter <FaTwitterSquare />{" "}
            </h1>
          </div>
          <div className=" w-[60%] h-full  pl-10 py-2">
            <form className="flex flex-col items-start  text-black text-xl gap-1  ">
              <h1 className="text-zinc-200 ">Your Name</h1>
              <input
                type="text"
                placeholder=" Name..."
                className="outline-none bg-zinc-200 h-[3vw] w-[74%] rounded-lg"
              />
              <h1 className="text-zinc-200 ">Email Address</h1>
              <input
                type="text"
                placeholder=" Email..."
                className="outline-none bg-zinc-200 h-[3vw] w-[74%] rounded-lg"
              />
              <h1 className="text-zinc-200 ">Message</h1>
              <textarea
                placeholder="Type your message here..."
                className="rounded h-[16vw] bg-zinc-200 outline-none w-[74%]"
              />
            </form>
          </div>
        </div>
      </>
    )
  } else {
    return (
      <div className=" w-4/6 pt-[10vw] flex mx-auto mb-10">
        <div className=" w-[40%] h-[94%] gap-3  flex flex-col items-end pr-10 py-2 border-r">
          <h1 className="text-4xl font-semibold mb-[4vw] ">Contact Us </h1>
          <h1 className="text-2xl font-light flex items-center gap-4">
            Care@ravian.ai
            <MdEmail />
          </h1>
          <h1 className="text-2xl font-light flex items-center gap-4">
            FaceBook <FaSquareFacebook />
          </h1>
          <h1 className="text-2xl font-light flex items-center gap-4">
            Twitter <FaTwitterSquare />{" "}
          </h1>
        </div>
        <div className=" w-[60%] h-full  pl-10 py-2">
          <form className="flex flex-col items-start  text-black text-xl gap-1  ">
            <h1 className="text-zinc-200 ">Your Name</h1>
            <input
              type="text"
              placeholder=" Name..."
              className="outline-none bg-zinc-200 h-[3vw] w-[74%] rounded-lg"
            />
            <h1 className="text-zinc-200 ">Email Address</h1>
            <input
              type="text"
              placeholder=" Email..."
              className="outline-none bg-zinc-200 h-[3vw] w-[74%] rounded-lg"
            />
            <h1 className="text-zinc-200 ">Message</h1>
            <textarea
              placeholder="Type your message here..."
              className="rounded h-[16vw] bg-zinc-200 outline-none w-[74%]"
            />
            <button className="px-4 py-2 bg-blue-800 text-white rounded-md">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
