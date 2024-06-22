import { createRef, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Home from "./modules/Home/Home";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import anim from "./assets/anims/blob.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LocomotiveScroll from "locomotive-scroll";
function App() {
  useEffect(() => {
    var crsr = document.querySelector(".cursor");
    document.addEventListener("mousemove", function (dets) {
      crsr.style.left = dets.x + -90 + "px";
      crsr.style.top = dets.y + -90 + "px";
    });
    setLoading(true);
  }, []);

  const [loading, setLoading] = useState(true);

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.to("#land", {
      delay: 3,
      height: 0,
      duration: 1,
      stagger: 0.03,
      onComplete: () => setLoading(false),
    });
    gsap.from("#spanText", {
      x: 50,
      delay: 0.2,
      opacity: 0,
      duration: 0.1,
      stagger: 0.3,
    });
  });

  return (
    <>
      <div className="hidden md:flex cursor pointer-events-none fixed z-50 transition ease-in-out duration-500 bg-center bg-cover mix-blend-difference">
        <Player
          autoplay
          loop
          src={anim}
          style={{ height: "180px", width: "180px" }}
          //   className="player"
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
      {loading ? (
        <div className="relative">
          <div
            id="land"
            className=" absolute z-20 h-screen w-screen flex justify-center items-center bg-[#161616]"
          >
            <div className="w-screen text-white text-3xl flex font-[med] mr-2">
              {"Hey ! Welcome to My Portfolio".split(" ").map((item, idx) => {
                if (item === "Portfolio") {
                  return (
                    <p
                      id="spanText"
                      className="text-[#7dff66] text-5xl font-[italica] mr-2"
                      key={item + idx}
                    >
                      {` ${item} `}
                    </p>
                  );
                } else {
                  return (
                    <>
                      <p
                        id="spanText"
                        className="text-white text-5xl font-[med] mr-2"
                        key={item + idx}
                      >
                        {` ${item} `}
                      </p>
                    </>
                  );
                }
              })}
            </div>
          </div>
          <div
            id="land"
            className=" absolute z-10 h-screen w-screen bg-[#7dff66]"
          ></div>
        </div>
      ) : (
        <>
          {" "}
          <Navbar />
          <Home />
        </>
      )}
    </>
  );
}

export default App;
