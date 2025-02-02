import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();

  return (
    <>
      <Link
        to="/"
        className="h-10 w-10 ml-[10vw] mt-[6vw] absolute ri-arrow-left-line hover:text-purple-400 text-xl duration-300"
      >
        <FaArrowLeft />
      </Link>
      <div className="about w-[72vw] mx-auto  flex flex-col items-center">
        <div className="w-full  flex justify-end items-center gap-2 flex-col mb-[2vw]">
          <h1 className="text-white text-4xl font-bold ">About Us</h1>
          <div>
            <img src='/divider.png' />
          </div>
        </div>
        <div className="contentBox h-full w-full text-center text-zinc-200">
          <div className="box h-[12.5vh] w-full overflow-hidden">
            <h1 className="text-3xl font-bold leading-[97%]">
              At RAVIAN, <br />
              we are dedicated to transforming the landscape of data analytics
              through innovation and cutting-edge TECHNOLOGY
            </h1>
          </div>
          <div className="context h-[60vh] ml-[15%] w-[70%] ">
            <p className="text-2xl mb-8 font-light text-zinc-300">
              As pioneers in the field, we have developed the world's leading AI
              data scientist—an intelligent platform that leads the way in
              crafting machine learning and deep learning models, conducting
              comprehensive data analysis, and delivering actionable insights
              through intuitive visualizations.
            </p>
            <p className="text-2xl mb-8 font-light text-zinc-300">
              Our journey began with a vision to empower businesses with the
              tools they need to harness the power of their data and make
              informed decisions that drive success. With a team of passionate
              experts and a commitment to excellence, we have turned that vision
              into reality.
            </p>
            <p className="text-2xl mb-8 font-light text-zinc-300">
              Today, RAVIAN stands at the forefront of AI-driven analytics,
              helping businesses of all sizes unlock the full potential of their
              data assets. Whether you're uncovering hidden patterns, predicting
              future trends, or optimizing operations, RAVIAN AI is your trusted
              partner in navigating the complexities of data-driven
              decision-making. Join us on this journey as we continue to push
              the boundaries of what's possible in the realm of data analytics.
              Welcome to RAVIAN AI—where innovation meets intelligence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
