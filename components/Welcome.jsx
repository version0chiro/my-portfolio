import React, { useContext } from "react";
import { useSpring, animated } from "react-spring";
import { Store } from "../utils/Store";

export default function Welcome() {
  const { state, dispatch } = useContext(Store);

  const { show } = state;

  const fade1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: { duration: 1000 },
  });

  const fade2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1500,
    config: { duration: 1000 },
  });

  const fade3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },

    delay: 2500,
    config: { duration: 1000 },
  });

  const fade4 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 3500,
    config: { duration: 1000 },
  });


  return (
    <animated.div  className="relative bg-gradient-to-tr from-neutralButton-from to-neutralButton-to h-screen flex flex-col justify-center">
      <animated.div style={fade1}>
        <h1 className="font-Poppins text-5xl">Hello.</h1>
      </animated.div>

      <animated.div style={fade2}>
        <h1 className="font-Poppins text-3xl">I am Sachin Singh</h1>
      </animated.div>

      <animated.div style={fade2}>
        <h1 className="font-Poppins text-xl">I am a Software Developer</h1>
      </animated.div>

      <animated.div style={fade3}>
        <h1 className="font-Poppins text-xl mt-3">
          Do you want to know more about me?
        </h1>
      </animated.div>
      <div className="flex mt-3">
        <animated.div style={fade4} className="w-1/2">
          <button
            onClick={() => {
              dispatch({ type: "showAll" });
            }}
            className="animate-bounce border-2 p-2 rounded-md m-4 bg-gradient-to-r from-yesButton-from to-yesButton-to"
          >
            <h1 className="font-Poppins text-xl">Yes 😁</h1>
          </button>
        </animated.div>
        <animated.div style={fade4} className="w-1/2">
          <button className="animate-bounce border-2 m-4 p-2 rounded-md bg-gradient-to-r from-noButton-from to-noButton-to">
            <h1 className="font-Poppins text-xl">No 😔</h1>
          </button>
        </animated.div>
      </div>
    </animated.div>
  );
}
