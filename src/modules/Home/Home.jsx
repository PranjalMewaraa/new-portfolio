import React, { useEffect, useRef } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import anim from "../../assets/anims/mouseanim.json";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import testimonials from "../../utils/testimonials";
import img from "../../assets/Untitled.png";
import { LinkPreview } from "../../components/ui/hover";
import Featured from "../../components/custom/featured";
import imgw from "../../assets/21.jpg";
import { LinkPreview2 } from "../../components/ui/hover-cursor";
import Socialcard from "../../components/custom/socialcard";
import ux from "../../assets/Resume/UXRESUME.pdf";
import fe from "../../assets/Resume/Resume-Pranjal.pdf";
import wiz from "../../assets/project/wiz.webp";
import cs from "../../assets/project/CS.webp";
import j4d from "../../assets/project/J4D.webp";
import rent from "../../assets/project/rent.webp";
import jf from "../../assets/project/JF.webp";
const Home = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useGSAP(() => {
    gsap.to(".player", {
      scrollTrigger: {
        trigger: ".player",
        start: "top 55%",
        end: "top 50%",
        scrub: 1,
      },
      opacity: 0,
    });

    gsap.to(".textHome", {
      scrollTrigger: {
        trigger: ".textHome",
        start: "center 15%",
        end: "top 0%",
        scrub: 1,
      },
      duration: 0.7,
      opacity: 0,
    });

    gsap.to(".textHome,.player", {
      scrollTrigger: {
        trigger: ".textHome",
        start: "top 30%",
        end: "top 5%",
        scrub: 1,
      },

      scale: 0.8,
      y: 100,
    });

    gsap.to("#nav", {
      scrollTrigger: {
        trigger: ".textHome",
        start: "top 30%",
        end: "top 5%",
        scrub: 1,
      },

      scale: 0.8,
      y: -100,
    });

    gsap.from(".textHome,.player", {
      y: 50,
      delay: 0.9,
      duration: 1,
      opacity: 0,
      stagger: 0.3,
    });
    gsap.from("#bgl", {
      scrollTrigger: {
        trigger: "#black-content",
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
      scale: 0.95,
    });
    gsap.to("#bgl2", {
      scrollTrigger: {
        trigger: "#bgl2",
        start: "bottom bottom",
        end: "bottom center",
        scrub: 1,
      },
      scale: 0.95,
    });

    gsap.from("#about", {
      scrollTrigger: {
        trigger: "#black-content",
        scrub: 1,
        start: "top bottom",
        end: "top center",
      },
      stagger: 1,
      delay: 2,
      y: 50,
      opacity: 0,
    });

    gsap.from("#ppimg", {
      scrollTrigger: {
        trigger: "#ppimg",
        start: "center bottom",
        end: "center center",
        scrub: 1,
      },
      x: -50,
      opacity: 0,
    });
    gsap.from("#infopp", {
      scrollTrigger: {
        trigger: "#ppimg",
        start: "center bottom",
        end: "center center",
        scrub: 1,
      },
      stagger: 0.5,
      y: 50,
      opacity: 0,
    });

    gsap.from("#sp1", {
      scrollTrigger: {
        trigger: "#sp1",
        start: "top 90%",
        end: "top 70%",
      },

      y: 50,
      duration: 1,
      opacity: 0,
    });
    gsap.from("#sp2", {
      scrollTrigger: {
        trigger: "#sp2",
        start: "top 90%",
        end: "top 50%",
      },

      y: 50,
      duration: 1,
      opacity: 0,
    });
    gsap.from("#sp3", {
      scrollTrigger: {
        trigger: "#sp3",
        start: "top 90%",
        end: "top 50%",
      },

      y: 50,
      duration: 1,
      opacity: 0,
    });
    gsap.from("#sp4", {
      scrollTrigger: {
        trigger: "#sp4",
        start: "top 90%",
        end: "top 50%",
      },

      y: 50,
      duration: 1,
      opacity: 0,
    });
    gsap.from("#sp5", {
      scrollTrigger: {
        trigger: "#sp5",
        start: "top 90%",
        end: "top 50%",
      },

      y: 50,
      duration: 1,
      opacity: 0,
    });
    gsap.from("#footerTitle", {
      scrollTrigger: {
        trigger: "footer",
        start: "top center",
        end: "top 30%",
        scrub: 1,
      },
      y: 100,
      opacity: 0,
    });
    gsap.from("#fbutn", {
      scrollTrigger: {
        trigger: "#footerTitle",
        start: "center center",
        end: "top 20%",
        scrub: 1,
      },
      delay: 1,
      y: 100,
      opacity: 0,
    });
    gsap.from("#social", {
      scrollTrigger: {
        trigger: "footer",
        start: "top 10%",
        end: "top top",
        scrub: 1,
      },
      delay: 1,
      y: 100,
      opacity: 0,
    });
  });

  const footerRef = useRef(null);

  useEffect(() => {
    const element = footerRef.current;

    gsap.to(element, {
      backgroundPositionY: "0%", // Adjust this to create the desired parallax effect
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom", // When the top of the footer hits the bottom of the viewport
        end: "bottom top", // When the bottom of the footer hits the top of the viewport
        scrub: true, // Smoothly scrubs the animation
      },
    });
  }, []);

  const getRole = () => {
    gsap.to("#role", {
      opacity: 1,
      y: -10,
    });
  };

  const remRole = () => {
    gsap.to("#role", {
      opacity: 0,
      y: 10,
    });
  };

  return (
    <>
      <div className="scroll h-full w-full bg-white relative z-10">
        <div
          id="landing-home"
          className="flex h-[85vh] flex-col gap-8 justify-center items-center"
        >
          <p className="textHome md:text-[5.5vw] text-[9vw] font-[boldx] text-center">
            Pranjal is a{" "}
            <span className="font-[italica] text-[#14CF93]">UI designer</span>,{" "}
            <span className="font-[italica] text-[#14CF93]">
              Software Developer
            </span>
            ,
            <br />{" "}
            <span className="font-[italica] text-[#14CF93]">
              Mobile developer
            </span>{" "}
            and part time{" "}
            <span className="font-[italica] text-[#14CF93]"> gamer</span>.
          </p>
        </div>
        <div className="mb-32 player" id="xx">
          <Player
            autoplay
            loop
            src={anim}
            style={{ height: "80px", width: "80px" }}
            //   className="player"
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>
        </div>

        <div
          id="bgl"
          className="w-full h-fit pt-24 px-12 md:px-24 bg-[#0E1323] overflow-hidden flex justify-center items-start rounded-t-[100px] "
        >
          <div id="black-content" className="w-full flex flex-col gap-4 h-auto">
            <div
              id="about"
              className="w-full text-white font-[heavy] text-[6vw]"
            >
              WHAT DO I DO{" "}
              <span className="text-[#D0D0C6] text-[4.5vw]"> /</span>
            </div>
            <div id="about" className="w-full flex gap-8 justify-end">
              <span className="hidden sm:flex text-white text-xl md:text-[1.5vw] font-[boldx]">
                echo $
              </span>
              <div className="w-full md:w-1/3 text-white font-[gil] text-justify text-xl md:text-[1.1vw]">
                I love creating stunning ui designs for web, mobile, desktop
                applications and not only limiting to that i love to code those
                too. I am a CSE undergrad from Chandigarh University and Lead UI
                Designer and F.E. from Crud Studio. My love life includes
                Javascript Frameworks and libraries like React, React-Native,
                Next, Node, Express with pinch of SQL and NOSQL DBs.
              </div>
            </div>
            <div className="w-full h-[1px] my-4 bg-white"></div>
            <div className="w-full h-[80vh] py-10 flex flex-col md:flex-row">
              <div
                id="ppimg"
                className="w-full md:w-1/2 h-full flex justify-center items-center"
              >
                <img src={img} alt="" className="h-[95%] md:w-auto w-[95%]" />
              </div>
              <div className="w-full md:w-1/2 h-full justify-evenly flex flex-col gap-3">
                <p
                  id="infopp"
                  className="text-white font-[heavy] mb-4 text-[5vw] md:text-[3vw] underline underline-offset-8"
                >
                  POSITIONS THAT I SERVED
                </p>
                <p id="infopp" className="text-white text-2xl  md:text-[2vw]">
                  Software Developer - React{" "}
                  <span className=" text-slate-400 text-xl md:text-[1.5vw] font-serif underline underline-offset-4">
                    <LinkPreview
                      url="https://crudstudio.com"
                      className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                      {`crudstudio ↗ (2023-2024)`}
                    </LinkPreview>{" "}
                  </span>
                </p>
                <p id="infopp" className="text-white text-2xl md:text-[2vw]">
                  Lead UI UX Design{" "}
                  <span className=" text-slate-400 text-xl md:text-[1.5vw] font-serif underline underline-offset-4">
                    <LinkPreview
                      url="https://crudstudio.com"
                      className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                      {`crudstudio ↗ (2023-2024)`}
                    </LinkPreview>{" "}
                  </span>
                </p>
                <p id="infopp" className="text-white text-2xl md:text-[2vw]">
                  Junior UI UX Design Intern{" "}
                  <span className=" text-slate-400 text-xl md:text-[1.5vw] font-serif underline underline-offset-4">
                    <LinkPreview
                      url="https://gruby.in"
                      className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                    >
                      {`Gruby ↗ (Early 2023- Mid 2023)`}
                    </LinkPreview>{" "}
                  </span>
                </p>
              </div>
            </div>
            {/* <div className="w-full h-[2px] my-4 bg-white"></div> */}
          </div>
        </div>
        <div
          id="bgl2"
          className="w-full h-fit pb-44 pt-24 px-8 md:px-24 bg-[#0E1323] overflow-hidden flex justify-center items-start rounded-b-[100px]"
        >
          <div
            id="blacki-content"
            className="w-full flex flex-col gap-4 h-auto"
          >
            <div className="h-fit w-full flex flex-col items-center mt-10 gap-4">
              <div
                id="work"
                className="w-full text-white font-[heavy] text-[6vw]"
              >
                FEATURED WORK{" "}
                <span className="text-[#D0D0C6] text-[3.5vw] font-serif">{`(5)`}</span>
              </div>
            </div>

            <div className="hidden h-[80vh] w-full gap-28 md:flex flex-col md:flex-row items-end">
              <div
                id="sp1"
                className="md:w-2/3 xl:w-1/2 h-full"
                onMouseEnter={getRole}
                onMouseLeave={remRole}
              >
                <Featured
                  projectName="WizardDigitek Electronics"
                  img={wiz}
                  role="UI UX & F.E."
                />
              </div>
              <div
                id="sp2"
                className="md:w-1/2 xl:w-1/3 h-2/3"
                onMouseEnter={getRole}
                onMouseLeave={remRole}
              >
                <Featured
                  projectName="Crud Studio Website"
                  img={cs}
                  role="UI UX & F.E."
                />
              </div>
            </div>
            <div className="hidden sm:h-[60vh] md:h-[80vh] w-full md:flex  justify-center my-20">
              <div
                id="sp3"
                className="w-full md:w-2/3 xl:w-1/2 h-full "
                onMouseEnter={getRole}
                onMouseLeave={remRole}
              >
                <Featured
                  projectName="JugaduFauji LMS"
                  img={jf}
                  role="UI UX & F.E."
                />
              </div>
            </div>
            <div
              className="h-screen hidden w-full md:flex flex-col md:flex-row gap-32"
              onMouseEnter={getRole}
              onMouseLeave={remRole}
            >
              <div id="end" className="sm:w-2/3 md:w-1/2 h-full flex items-end">
                <div id="sp4" className="h-2/3 w-full">
                  <Featured
                    projectName="Glossy Bricks"
                    img={rent}
                    role="UI UX & F.E."
                  />
                </div>
              </div>
              <div
                className="sm:w-2/3 md:w-1/2 h-full flex items-start"
                onMouseEnter={getRole}
                onMouseLeave={remRole}
              >
                <div id="sp5" className="h-2/3 w-full">
                  <Featured
                    projectName="Skye Social stop"
                    img={j4d}
                    role="UI UX & F.E."
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-fit py-10 flex flex-col gap-8 md:hidden">
              <div className="w-full h-[40vh] flex justify-center items-center">
                <Featured
                  projectName="WizardDigitek Electronics"
                  img={wiz}
                  role="UI UX & F.E."
                />
              </div>
              <div className="w-full h-[40vh] flex justify-center items-center">
                <Featured
                  projectName="Crud Studio Website"
                  img={cs}
                  role="UI UX & F.E."
                />
              </div>
              <div className="w-full h-[40vh] flex justify-center items-center">
                <Featured
                  projectName="JugaduFauji LMS"
                  img={jf}
                  role="UI UX & F.E."
                />
              </div>
              <div className="w-full h-[40vh] flex justify-center items-center">
                <Featured
                  projectName="Glossy Bricks"
                  img={rent}
                  role="UI UX & F.E."
                />
              </div>
              <div className="w-full h-[40vh] flex justify-center items-center">
                <Featured
                  projectName="Skye Social stop"
                  img={j4d}
                  role="UI UX & F.E."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen md:w-full min-h-screen h-fit flex flex-col p-4 md:p-10 gap-4 overflow-hidden">
          <form
            id="contact"
            className="w-full p-8 text-3xl md:text-[3vw] my-4 font-[gil] md:text-left ml-auto text-black"
          >
            <br />
            <p className="text-2xl mb-2 font-[gil]">
              {`
            Drop me a line or come grab a coffee, it’s on me, and let's create
            the extraordinary together`}
            </p>
            <br />
            <p className="font-[gil] leading-2xl">
              {`Hey, I’m`}
              <span>
                <input
                  type="text"
                  className=" border-b my-2 italic border-[#000] bg-transparent px-4 placeholder-[#14CF93]"
                  name="Name"
                  placeholder="Your Name"
                />
              </span>{" "}
              <br />
              {`
            Let's grab a virtual coffee and chat things out.`}{" "}
              <br />
              {`
            Reach me back at `}
              <span>
                <input
                  className=" border-b italic my-2 border-[#000] bg-transparent px-4 placeholder-[#14CF93]"
                  type="text"
                  name="Email"
                  placeholder="Your Email address"
                />
              </span>{" "}
              <br />
              {` Here’s what I’m thinking: `}
              <span>
                <input
                  className=" border-b w-full italic border-[#000] bg-transparent px-4 my-3 placeholder-[#14cf93]"
                  type="text"
                  name="Idea"
                  placeholder="Let your creativity flow freely "
                />
              </span>{" "}
            </p>
            <div className="w-full flex my-4 justify-end">
              <button
                type="submit"
                className=" text-xl md:px-8 md:py-4 py-2 px-4 md:w-auto w-full font-[reg] text-white bg-[#264341] rounded-xl"
              >
                Reach Out
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer
        ref={footerRef}
        className={
          "w-full h-fit md:h-screen py-20 px-10 flex flex-col gap-10 bg-custom-green bg-footer-bg bg-fixed bg-cover bg-center"
        }
        style={{ backgroundPositionY: "100%" }}
      >
        <p
          id="footerTitle"
          className="text-white text-[7vw] md:text-[5vw] mt-5 leading-none w-full text-center font-[med]"
        >
          LETS CREATE <br /> SOMETHING NEW <br />
          TOGETHER !
        </p>
        <div
          id="resume"
          className="flex w-full h-24 justify-between gap-2 md:m-10 md:px-10"
        >
          <p
            id="fbutn"
            className="download-button text-lg xl:text-[1vw] h-full md:w-2/5 w-1/2 rounded-full border border-white flex  justify-center items-center"
          >
            <span className="download-button-content w-full h-full text-white flex justify-center items-center">
              <a href={fe}>DOWNLOAD MY F.E RESUME </a>
            </span>
          </p>
          <p
            id="fbutn"
            className="download-button text-lg xl:text-[1vw] h-full md:w-2/5 w-1/2  rounded-full border border-white flex justify-center items-center"
          >
            <span className="download-button-content w-full h-full flex text-white justify-center items-center">
              <a href={ux}>DOWNLOAD UX RESUME</a>
            </span>
          </p>
        </div>
        <div
          id="social"
          className="w-full h-fit md:justify-between justify-center flex flex-wrap px-20 mt-10"
        >
          <Socialcard
            name="Dribbble"
            profile="@pranjalmewaraa"
            url="https://dribbble.com/pranjalmewaraa"
          />
          <Socialcard
            name="Linkedin"
            profile="@pranjalmewaraa"
            url="https://www.linkedin.com/in/pranjalmewaraa"
          />
          <Socialcard
            name="Github"
            profile="@pranjalmewaraa"
            url="https://github.com/PranjalMewaraa/"
          />
          <Socialcard
            name="Gmail"
            profile="@pranjalmewaraa"
            url="mailto:mewarapranjal089@gmail.com"
          />
        </div>
      </footer>
    </>
  );
};

export default Home;
