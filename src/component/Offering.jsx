import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Offering() {
    const navigate = useNavigate()
  return (
    <>
      <div
        onClick={() => navigate(-1)}
        className="h-10 w-10 mt-[6vw] ml-[10vw] absolute ri-arrow-left-line hover:text-purple-400 text-xl duration-300"
      >
        <FaArrowLeft />
      </div>
      <div className="offering  h-[100vh] w-[72vw] mx-auto  flex flex-col items-center">
        <div className="w-full  flex justify-end items-center gap-2 flex-col mb-[6vw]">
          <h1 className=" text-white text-4xl font-bold ">Our Offerings</h1>
        </div>
        <div className="h-[50vh] w-[80%] mx-auto flex justify-center items-start">
          <div className="contentBox1 w-[30%] flex flex-col  items-center mt-[-5%] mr-5 gap-2 ">
            <div className="  text-white h-[2.4vw] w-[15vw] flex justify-center">
              {" "}
              <img className="h-10 w-10" src='/001-options.svg' alt="optionicon" />{" "}
            </div>
            <div className="heading  h-10 w-64 text-center overflow-hidden">
              <h1 className="text-3xl mb-4">AI Data Analyst</h1>
            </div>

            <p className="w-[100%]  rounded text-center  text-lg font-light">
              AI Data Analyst Meet Your AI Data Analyst Unlock the full
              potential of your data with RAVIAN AI’s Data Analyst—an
              intelligent platform designed to transform raw data into
              actionable insights. Our AI Data Analyst is equipped with the
              latest machine learning algorithms and cutting-edge technologies
              to analyze, interpret, and visualize data with precision and
              speed.
            </p>
          </div>
          <div className=" w-[2%] h-[2px] bg-zinc-100 translate-y-[8vh]"></div>
          {/* -------------middle line------------ */}
          <div className="deviderLine h-full w-[1px] bg-zinc-200"></div>
          {/* ------------------------------------ */}
          <div className=" w-[2%] h-[2px] bg-zinc-100 translate-y-[40vh]"></div>
          <div className="contentBox2 relative w-[35%] flex flex-col items-center mt-[16%] ml-5 gap-2">
            <div className=" h-[2.4vw] w-[15vw] flex justify-center ">
              {" "}
              <img className="h-10 w-10" src='/002-chat.svg' alt="chaticon" />{" "}
            </div>
            <div className="heading h-10 w-64 text-center overflow-hidden ">
              <h1 className="text-3xl mb-4 ">Gen AI Vision Analyst</h1>
            </div>
            <p className="w-[100%] text-center text-lg font-light">
              Introducing the Gen AI Vision Analyst: Redefining Visual
              Intelligence At RAVIAN AI, we're excited to introduce our
              revolutionary Gen AI Vision Analyst—a next-generation solution
              that sets a new standard for visual intelligence and data
              analysis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offering;
