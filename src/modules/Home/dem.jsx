import React from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import testimonials from "../../utils/testimonials";

const dem = () => {
  return (
    <div
      id="textab"
      className="px-24 w-5/12 mt-10 text-white text-justify font-[gil] "
    >
      {"I'm a JavaScript virtuoso, expertly wielding".split(" ").map((item) => {
        return (
          <span key={item} className=" texta text-[1.5vw] text-white">
            {item}{" "}
          </span>
        );
      })}
      {"ReactJS, NextJS, NodeJS, and ExpressJS ".split(" ").map((item) => {
        return (
          <span
            key={item}
            className=" texta font-[italica] text-[1.5vw] text-[#14cf93]"
          >
            {item}{" "}
          </span>
        );
      })}
      {"to craft captivating web experiences. But my talents don't stop at the browser's edge—I blend artistry and technical prowess to create stunning "
        .split(" ")
        .map((item) => {
          return (
            <span key={item} className=" texta text-[1.5vw] text-white">
              {item}{" "}
            </span>
          );
        })}
      {"VISUAL DESIGNS".split(" ").map((item) => {
        return (
          <span
            key={item}
            className=" texta text-[1.5vw] font-[italica] text-[#14cf93]"
          >
            {item}{" "}
          </span>
        );
      })}
      {"that truly stand out. Beyond the web, my skills extend into the realm of "
        .split(" ")
        .map((item) => {
          return (
            <span key={item} className=" texta text-[1.5vw] text-white">
              {item}{" "}
            </span>
          );
        })}
      {"HYBRID / ANDROID MOBILE DEVELOPMENT ".split(" ").map((item) => {
        return (
          <span
            key={item}
            className=" texta font-[italica] text-[1.5vw] text-[#14cf93]"
          >
            {item}{" "}
          </span>
        );
      })}
      {"ensuring seamless and engaging experiences across platforms. From dynamic web applications to sleek mobile interfaces, I turn visions into reality with code and creativity."
        .split(" ")
        .map((item) => {
          return (
            <span
              key={item}
              className=" texta bg-slate-900 text-[1.5vw] text-white"
            >
              {item}{" "}
            </span>
          );
        })}
      <div
        id="testimonials"
        className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default dem;
