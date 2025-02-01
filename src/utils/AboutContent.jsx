import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
function AboutContent() {
  const [show, setshow] = useState(0);

  const info = [
    {
      heading: "What is our motive?",
      para: "As pioneers in the field, we have developed the world's leading AI data scientist—an intelligent platform that leads the way in crafting machine learning and deep learning models, conducting comprehensive data analysis, and delivering actionable insights through intuitive visualizations.",
    },
    {
      heading: "What is our company's mission?",
      para: "Our journey began with a vision to empower businesses withthe tools they need to harness the power of their data andmake informed decisions that drive success. With a team ofpassionate experts and a commitment to excellence, we haveturned that vision into reality.",
    },
    {
      heading: "How we can Benefit you?",
      para: "Today, RAVIAN stands at the forefront of AI-drivenanalytics, helping businesses of all sizes unlock the fullpotential of their data assets. Whether you're uncoveringhidden patterns, predicting future trends, or optimizingoperations, RAVIAN AI is your trusted partner in navigatingthe complexities of data-driven decision-making. Join us onthis journey as we continue to push the boundaries of what'spossible in the realm of data analytics. Welcome to RAVIANAI—where innovation meets intelligence.",
    },
  ];

  return (
    <>
      <div className="about w-[80%] min-h-[100vh]   mx-auto  flex flex-col items-center gap-10">
        <div className="w-full  flex justify-end items-center gap-2 flex-col mb-[2vw]">
          <h1 className="text-white text-4xl font-bold ">About Us</h1>
          <div>
            <img src='/divider.png' />
          </div>
        </div>
        <div className="contentBox h-full w-full text-center text-zinc-200">
          <div className="box h-[13.5vh] w-[60%] ml-[20%] overflow-hidden">
            <h1 className="text-3xl font-bold leading-[97%]">
              At RAVIAN, <br />
              we are dedicated to transforming the landscape of data analytics
              through innovation and cutting-edge TECHNOLOGY
            </h1>
          </div>

          {/* ------------------------------------------------------ */}
          <div className="context  ml-[15%] w-[70%] ">
            {info.map((elem, index) => {
              return (
                <div className=" w-6/12 mx-auto rounded drop-shadow-1xl m-4 ">
                  <div
                    onClick={() => setshow(index)}
                    className="w-full  h-[6vh] flex justify-between items-center p-2 bg-zinc-800 hover:bg-slate-500 duration-100 cursor-pointer rounded text-xl"
                  >
                    <span>{elem.heading}</span>
                    <span>
                      <FaChevronDown />{" "}
                    </span>
                  </div>
                  {index === show && (
                    <div className="p-2 ">
                      <p className="text-2xl mb-8 font-light text-zinc-300">
                        {elem.para}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* ---------------------------------------------------- */}
        </div>
      </div>
    </>
  );
}

export default AboutContent;
