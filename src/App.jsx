import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import Home from "./modules/Home/Home";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import anim from "./assets/anims/blob.json";
function App() {
  useEffect(() => {
    var crsr = document.querySelector(".cursor");
    document.addEventListener("mousemove", function (dets) {
      crsr.style.left = dets.x + -90 + "px";
      crsr.style.top = dets.y + -90 + "px";
    });
  }, []);
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
      <Navbar />
      <Home />
    </>
  );
}

export default App;
