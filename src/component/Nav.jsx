import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

function Nav() {
  useGSAP(() => {
    gsap.from("#heading", {
      y: "-150",
      duration: 1,
      delay: 1,
      stagger: 0.2,
    });
  });

  const navItems = [
    { name: "About", link: "/about" },
    { name: "Vision", link: "/vision" },
    { name: "RAVIAN AI", link: "/" },
    { name: "Offerings", link: "/offering" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="z-50 navbar fixed h-[4.4vw] w-[80%] ml-[10%] flex items-center justify-center text-white cursor-pointer border-[1px] border-zinc-400 bg-black rounded-[50px] mb-10">
      {" "}
      <div className="navname flex items-center justify-center gap-16 fixed ">
        {navItems.map((elem, index) => (
          <Link key={index} id="heading" to={elem.link}>
            <h1
              className={`${
                index === 2
                  ? "text-3xl font-bold"
                  : `text-lg 
                   relative
                    text-white
                     hover:text-gray-400
                      cursor-pointer 
                      transition-all ease-in-out
                       before:transition-[width]
                        before:ease-in-out
                         before:duration-700 
                         before:absolute
                          before:bg-gray-400
                           before:origin-center
                            before:h-[1px]
                             before:w-0
                              hover:before:w-[50%]
                               before:bottom-0
                                before:left-[50%]
                                 after:transition-[width] 
                                 after:ease-in-out 
                                 after:duration-700
                                  after:absolute
                                   after:bg-gray-400
                                    after:origin-center
                                     after:h-[1px]
                                      after:w-0
                                       hover:after:w-[50%]
                                        after:bottom-0
                                         after:right-[50%]`
              }`}
            >
              {elem.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Nav;
