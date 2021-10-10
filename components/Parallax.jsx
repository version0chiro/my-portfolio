import React from "react";
import { useSpring, animated } from "react-spring";
import { useContext, useState } from "react";
import { Store } from "../utils/Store";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Content() {
  const { state, dispatch } = useContext(Store);

  const { show } = state;
  return (
    <animated.div className="relative bg-gradient-to-t from-yesButton-to to-neutralButton-to h-screen flex flex-col justify-center">
      <Parallax pages={3} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          factor={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          factor={2}
          style={{ backgroundColor: "#ff6d6d" }}
        />

        <ParallaxLayer
          offset={1}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <p>Scroll up</p>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={2.5} className="bg-noButton-to" />

        <ParallaxLayer
          offset={2}
          speed={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <p>Scroll again</p>
        </ParallaxLayer>
      </Parallax>
    </animated.div>
  );
}
