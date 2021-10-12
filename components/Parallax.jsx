import React, { useRef } from "react";
import { useSpring, animated, useTransition } from "react-spring";

import { CenterModal, ModalCloseTarget, ModalTitle } from "react-spring-modal";

import { useContext, useState } from "react";
import { Store } from "../utils/Store";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import App from "./hoverPicture/PhotoCard";
import "react-spring-modal/styles.css";

export default function Content() {
  const { state, dispatch } = useContext(Store);

  const { show } = state;

  const [modalVisible, setModalVisible] = useState(false);

  const parallax = useRef(null);
  return (
    <div className="w-screen h-screen bg-spaceBackground flex flex-col justify-center">
      <Parallax ref={parallax} pages={3}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            backgroundColor: "#805E73",
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            backgroundColor: "#87BCDE",
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
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
            <h1 className="font-Poppins text-white text-3xl md:text-4xl lg:text-6xl">
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
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
          className=""
        >
          <img
            className="ml-10"
            src="https://img.icons8.com/office/48/000000/superman.png"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.2}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        ></ParallaxLayer>
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
