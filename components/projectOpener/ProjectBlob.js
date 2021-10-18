import { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "react-spring";

import data from "./data";

import styles from "./projectBlob.module.css";

const ProjectBlob = ({index}) => {
  const [open, setOpen] = useState(false);

  const SpringApi = useSpringRef();

  const { size, ...rest } = useSpring({
    ref: SpringApi,
    config: config.stiff,
    from: {
      size: "20%",
      background: "hotpink",
    },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "hotpink" : "white",
    },
  });

  const springFadeApi = useSpringRef();

  const { opacity, ...restFade } = useSpring({
    ref: springFadeApi,
    config: config.stiff,
    from: {
      opacity: 1,
    },
    to: {
      opacity: !open ? 1 : 0,
    },
  });

  const transApi = useSpringRef();

  const transition = useTransition(open ? data[index] : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(
    open
      ? [SpringApi,  transApi,springFadeApi]
      : [transApi,  SpringApi,springFadeApi],
    [0, open ? 0.1 : 0.6]
  );

  return (
    <div className="flex flex-col m-8">
      <animated.div
        style={{
          ...restFade,
          opacity: opacity,
        }}
      >
        <h1 className="font-Poppins text-white text-xl md:text-2xl lg:text-3xl">
          Achivements
        </h1>
      </animated.div>
      <div className={styles.wrapper}>
        <animated.div
          style={{ ...rest, width: size, height: size }}
          className={styles.container}
          onClick={() => setOpen((open) => !open)}
        >
          {transition((style, item) => (
            <animated.div
              className={styles.item}
              style={{ ...style, background: item.css }}
            >
              {item.name}
            </animated.div>
          ))}
        </animated.div>
      </div>
    </div>
  );
};

export default ProjectBlob;
