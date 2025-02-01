import React from "react";
import line from "../../../public/divider.png";
import img1 from "../../../public/001-options.svg";
import img2 from "../../../public/002-chat.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Content() {
  useGSAP(() => {
    gsap.from(".heading", {
      y: -50,
      duration: 1,
    });
  });

  return (
    <div className="min-h-[100vh] w-full mb-[4vw]">
      <div className="w-full h-32 flex justify-end items-center gap-2 flex-col mb-[10vw]">
        <h1 className="heading text-white text-4xl font-bold ">
          Our Offerings
        </h1>
        <div>
          <img src={line} />
        </div>
      </div>
      <div className="h-[50vh] w-[80%] mx-auto flex justify-center items-start">
        <div className="contentBox1 w-[40%] flex flex-col items-end mt-[-5%] mr-5 gap-2">
          <div className="h-[2.4vw] w-[15vw] flex justify-center">
            {" "}
            <img className="h-10 w-10" src={img1} />{" "}
          </div>
          <div className="heading  h-10 w-64 text-center overflow-hidden">
            <h1 className="text-3xl mb-4">AI Data Analyst</h1>
          </div>
          <p className="w-[50%] text-center text-lg font-light">
            AI Data Analyst Meet Your AI Data Analyst Unlock the full potential
            of your data with RAVIAN AI’s Data Analyst—an intelligent platform
            designed to transform raw data into actionable insights. Our AI Data
            Analyst is equipped with the latest machine learning algorithms and
            cutting-edge technologies to analyze, interpret, and visualize data
            with precision and speed.
          </p>
        </div>
        <div className=" w-[2%] h-[2px] bg-white translate-y-[8vh]"></div>
        {/* -------------middle line------------ */}
        <div className="deviderLine h-full w-[1px] bg-white"></div>
        {/* ------------------------------------ */}
        <div className=" w-[2%] h-[2px] bg-white translate-y-[40vh]"></div>
        <div className="contentBox2 w-[40%] flex flex-col items-start mt-[16%] ml-5 gap-2">
          <div className="h-[2.4vw] w-[15vw] flex justify-center ">
            {" "}
            <img className="h-10 w-10" src={img2} />{" "}
          </div>
          <div className="heading h-10 w-64 text-center overflow-hidden ">
            <h1 className="text-3xl mb-4 ">Gen AI Vision Analyst</h1>
          </div>
          <p className="w-[50%] text-center text-lg font-light">
            Introducing the Gen AI Vision Analyst: Redefining Visual
            Intelligence At RAVIAN AI, we're excited to introduce our
            revolutionary Gen AI Vision Analyst—a next-generation solution that
            sets a new standard for visual intelligence and data analysis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
