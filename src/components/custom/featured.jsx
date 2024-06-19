import { Controls, Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import anim from "../../assets/anims/arr.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Card = (props) => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div
      id="cardp"
      className={`relative h-full w-full rounded-3xl overflow-hidden shadow-lg`}
    >
      <img
        className="absolute inset-0 bg-center z-0 h-full w-full"
        src={props.img}
      ></img>
      <div className="relative z-10 h-full gap-4 w-full items-start flex flex-col justify-end p-4 bg-opacity-75">
        <div
          id="role"
          className=" text-sm bg-white opacity-0 py-2 px-4 rounded-full font-semibold drop-shadow-xl"
        >
          {`Role: ${props.role}`}{" "}
        </div>
        <div className="flex gap-5">
          <p className="text-lg bg-white md:py-4 md:px-8 py-2 px-4 max-w-1/3 text-ellipsis  rounded-full font-semibold drop-shadow-xl">
            {props.projectName}
          </p>
          <div className="text-sm bg-white md:py-4 md:px-8 py-2 px-4 rounded-full drop-shadow-xl flex items-center">
            <Player
              autoplay
              loop
              src={anim}
              style={{ height: "20px", width: "auto" }}
              //   className="player"
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
