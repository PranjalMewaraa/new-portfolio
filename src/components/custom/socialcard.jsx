import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Socialcard = (props) => {
  return (
    <a
      href={`${props.url}`}
      id="socialCard"
      className="min-w-[250px] w-1/5 h-24 flex border-t border-white justify-center items-center"
    >
      <div
        id="scinner"
        className=" w-4/5 md:w-3/5 flex p-5 flex-col items-start"
      >
        <div className="md:text-[1.2vw] text-white">{props.name}</div>
        <div className="md`:text-[.75vw] text-gray-50">{props.profile}</div>
      </div>
      <div
        id="scinner"
        className="w-2/5 h-full flex justify-center items-center"
      >
        <SocialIcon url={props.url} />
      </div>
    </a>
  );
};

export default Socialcard;
