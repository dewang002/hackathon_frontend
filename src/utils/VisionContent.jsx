import React from "react";
function VisionContent() {

  return (
    <>
      <div className="vision min-h-[70vh]  w-[72vw] mx-auto  flex flex-col items-center">
        <div className="w-full  flex justify-end items-center gap-2 flex-col mb-[4vw]">
          <h1 className="text-white text-4xl font-bold ">Vision Us</h1>
          <div>
            <img src='/divider.png' />
          </div>
        </div>
        <div className="contentBox h-full w-full text-center text-zinc-200">
          <div className="box h-[12.5vh] w-full overflow-hidden">
            <h1 className="text-3xl font-bold leading-[97%]">
              At RAVIAN AI,
              <br />
              our vision is to redefine the frontiers of data science by
              integrating artificial intelligence with human ingenuity.
            </h1>
          </div>
          <div className="context mb-[5vw] ml-[15%] w-[70%] ">
            <p className="text-2xl mb-8 font-light text-zinc-300">
              We strive to develop AI-driven solutions that not only solve
              complex business problems but also cultivate a deeper
              understanding of the data that shapes our world. We envision a
              future where every organization, regardless of its size or sector,
              has access to the power of advanced data analytics, enabling them
              to make smarter decisions, innovate faster, and drive meaningful
              progress. Our goal is to become the cornerstone for transformative
              analytics that empower businesses to lead with confidence and
              clarity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisionContent;
