import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      // Calculate center of viewport
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Get deltas from center to mouse position
      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;
      
      // Calculate angle in degrees (add 180 to fix direction)
      const degree = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 180;
      
      setRotate(degree);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-[40vw] mx-auto">
      <div className="h-[20vh] w-[40vw] flex justify-center gap-2">
        {/* Left Eye */}
        <div className="h-full w-[30%] rounded-[50%] bg-zinc-200 flex items-center justify-center">
          <div className="relative h-[60%] w-[60%] bg-zinc-800 rounded-full overflow-hidden">
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className="absolute top-1/2 left-1/2 w-full h-[38%]"
            >
              <div className="eye w-10 h-10 bg-zinc-200 rounded-full" />
            </div>
          </div>
        </div>

        {/* Right Eye */}
        <div className="h-full w-[30%] rounded-[50%] bg-zinc-200 flex items-center justify-center">
          <div className="relative h-[60%] w-[60%] bg-zinc-800 rounded-full overflow-hidden">
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className="absolute top-1/2 left-1/2 w-full h-[38%]"
            >
              <div className="eye w-10 h-10 bg-zinc-200 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;