import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeroComponent() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".words", {
      x: "-100%",
      duration: 6,
      ease: "linear",
      repeat: -1,
    });
    gsap.from(".herotext", {
      scale: "0.55",
      duration: 2,
      ease: "easeIn",
    });
  });
  return (
    <>
      <div className="flex justify-start flex-col items-center h-[100vh]  w-full cursor-default overflow-hidden">
        <button className="mt-[9vw] z-40 outline-1 px-8 py-2 rounded-full uppercase active:scale-[0.96] bg-zinc-500 hover:bg-linear-to-br from-zinc-500 to-zinc-500 transition ease-in-out delay-75">
          Try Ravian
        </button>
        <div className="absolute rounded-full blur-[150px] top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] h-[500px] w-[500px] bg-[#95c11e]"></div>
        <h1 className="herotext relative text-[8vw] font-bold tracking-tight mt-[8vw]">
          RAVIAN AI
        </h1>
        <div className="relative  text-center translate-y-[-1vw] leading-[4vw]">
          <h1 className="text-[1.5vw] font-light text-white ">
            Turn Data into
          </h1>
          <div className="scrolling h-[8vw] w-[100vw]  flex  items-center overflow-hidden">
            <h1 className="words text-[8vw] shrink-0 italic">
              - Dicision - Dicision
            </h1>
            <h1 className="words text-[8vw] shrink-0 italic">
              - Dicision - Dicision
            </h1>
            <h1 className="words text-[8vw] shrink-0 italic">
              - Dicision - Dicision
            </h1>
          </div>
          <h1 className="text-[1.5vw] font-light pt-5 text-white">
            with our AI Data Scientist
          </h1>
        </div>
      </div>
    </>
  );
}

export default HeroComponent;
