import React, { useRef } from "react";
import { useSpring, animated, useTransition } from "react-spring";

import { CenterModal, ModalCloseTarget, ModalTitle } from "react-spring-modal";

import { useContext, useState } from "react";
import { Store } from "../utils/Store";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import App from "./hoverPicture/PhotoCard";
import "react-spring-modal/styles.css";

import ProjectCarasole from "./projectCarasole/ProjectCarasole";
import Deck from "./techStack/TeachStack";
import Techstack from "./techStack/Techstack";

export default function Content() {
  const { state, dispatch } = useContext(Store);

  const { show } = state;

  const [modalVisible, setModalVisible] = useState(false);

  const parallax = useRef(null);
  return (
    <div className="w-screen h-screen bg-spaceBackground flex flex-col justify-center">
      <Parallax ref={parallax} pages={5}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            backgroundColor: "#805E73",
          }}
        />
        <ParallaxLayer offset={2} speed={1} className="bg-black" />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={5}
          className="bg-custom bg-center bg-cover"
          style={{
            backgroundRepeat: "inherit",
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.2}
          // onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flex flex-col m-4 p-5">
            <h1 className="font-Poppins text-white mt-10 text-3xl md:text-4xl lg:text-6xl ">
              Who am I?
            </h1>

            <div className="flex flex-col items-center md:flex-row justify-around mt-4 ">
              {/* <img
                src="https://picsum.photos/200"
                className="p-2 bg-white rounded w-3/5  md:w-3/5 lg:w-3/6 xl:w-2/6" 
              /> */}
              <App className=" md:w-3/6 " />

              <div className="w-4/5 md:w-3/6 p-2 bg-white m-4 rounded flex flex-col content-around justify-around">
                <h1 className="font-Poppins text-xl md:text-2xl lg:text-4xl font-bold">
                  I am Sachin Singh Bhadoriya
                </h1>

                <p className="font-Poppins mt-5 mb-4 text-sm md:text-2xl lg:text-2xl">
                  I am a software developer, well versed in the latest
                  technologies and have a keen interest in web development.
                  Currently, I am well versed in React, NodeJS, ExpressJS,
                  MongoDB, and Python.
                  <br />I am a self-taught programmer and I am always looking to
                  learn new technologies and frameworks.
                  <br />
                  <br />
                  <button
                    className="m-3"
                    onClick={() => {
                      setModalVisible(true);
                    }}
                  >
                    For the long version click here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.8}
          speed={0.4}
          // onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {" "}
          <h1 className="font-Poppins text-white text-3xl md:text-4xl lg:text-6xl">
            Tech Stack
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.0}
          speed={0.4}
          // onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {" "}
          <div className="flex flex-row m-4 p-5 mt-11 justify-center items-center">
            <Deck />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.0}
          speed={0.3}
          // onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {" "}
          <div className="flex flex-row m-4 p-5 mt-11 justify-center items-center">
            <Techstack />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.4}
          speed={0.2}
          // onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="flex flex-col m-4 p-5">
            <h1 className="font-Poppins text-white text-3xl md:text-4xl lg:text-6xl">
              What do I do?
            </h1>

            <div className="flex flex-col items-center md:flex-row justify-around mt-4 ">
              {/* <img
                src="https://picsum.photos/200"
                className="p-2 bg-white rounded w-3/5  md:w-3/5 lg:w-3/6 xl:w-2/6" 
              /> */}
              <ProjectCarasole />

              <div className="w-4/5 md:w-3/6 p-2 bg-white m-4 rounded flex flex-col content-around justify-around">
                <h1 className="font-Poppins text-xl md:text-2xl lg:text-4xl font-bold">
                  I turn your ideas into reality
                </h1>

                <p className="font-Poppins mt-5 mb-4 text-sm md:text-2xl lg:text-2xl">
                  {`I have high experience in Data Structures and Algorithms and have been practising them in highly competitive environments such as Hackerrank (5 stars in problem-solving) and Leetcode (2.5 stars in ranking <10000). I have two technical papers published in the IETE-SF journal. Apart from this, I have a habit of exploring new and upcoming technologies regularly making me up to pace with the current market. I am also available as a freelancer and have provided satisfaction to multiple clients.`}
                  <br />
                  <br />
                  👈Some of my projects 👈
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            className="ml-10 w-2/12 md:w-1/12"
            src="https://img.icons8.com/office/80/000000/superman.png"
          />

          <img
            className="ml-10 w-2/12 md:w-1/12 float-right"
            src="https://img.icons8.com/color/150/000000/batman.png"
          />
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={3.6}
          speed={-0.6}
          style={{ pointerEvents: "none" }}
        >
          <img
            className="ml-10 w-2/12 md:w-1/12"
            src="https://img.icons8.com/color/150/000000/tanjiro-kamado.png"
          />
          <img
            className="ml-10 w-2/12 md:w-1/12 float-right"
            src="https://img.icons8.com/color/150/000000/sasuke-uchiha.png"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.4}
          speed={-0.5}
          style={{ pointerEvents: "none" }}
          horizontal={false}
        >
          <img
            className="ml-14 w-2/12 md:w-1/12"
            src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/80/000000/external-cowboy-independence-day-wanicon-lineal-color-wanicon.png"
          />

          <img
            className="ml-10 w-2/12 md:w-1/12 float-right"
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
          />
        </ParallaxLayer>

        <button
          onClick={() => {
            dispatch({ type: "hideAll" });
          }}
          className="fixed bottom-10 animate-bounce border-2 p-2 rounded-md m-4 bg-gradient-to-r from-yesButton-from to-yesButton-to z-50"
        >
          Click to go back
        </button>
      </Parallax>
      <CenterModal
        isOpen={modalVisible}
        onDismiss={() => setModalVisible(false)}
      >
        {/* Defaults to <h1> and gives it an id to make it the label for your modal */}
        <ModalTitle className="font-Poppins text-center text-2xl">
          My Background
        </ModalTitle>

        <p className="font-Poppins text-sm mt-5 text-center">{`I am currently pursuing Electronics and Telecommunication engineering from DJSCE. I am a Software Developer, well versed in the realm of Full-Stack Web development. microelectronics and edge computation, Deep/Machine Learning, Image Processing, Android Development (Native and Cross-Platform), Database management and Version Control. I have been in several national and international hackathon and competitions hosted by various organizations and have achieved tons of remarkable feet regarding the scale of projects and recognition. I have been an active open-source contributor on GitHub and have various self-hosted open-sourced repositories for people to get their hands into various new fields.`}</p>
        {/* Automatically adds onClick that dismisses modal */}
        <ModalCloseTarget>
          <button className="w-full animate-bounce border-2 p-2 rounded-md m-4 bg-gradient-to-r from-yesButton-from to-yesButton-to z-50">
            Close
          </button>
        </ModalCloseTarget>
      </CenterModal>
    </div>
  );
}
