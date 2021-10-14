import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
// import imgs from "./data";

const imgs = [
  "./selfPics/2.jpeg",
  "./selfPics/3.jpeg",
  "./selfPics/4.jpeg",
  "./selfPics/5.jpeg",
  "./selfPics/7.jpeg",
  "./selfPics/8.jpeg",
  "./selfPics/9.jpeg",
];

import styles from "./styles.module.css";

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 50;
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 50;

const wheel = (y) => {
  const imgHeight = 400;
  return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 9))}px`;
};

export default  function App() {
  const imageWidth = useRef(null);

  const [y_orig, setY] = useState(0);

  const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: y_orig }));

  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);

    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  useEffect(() => {
    wheelApi.set({ wheelY: y_orig });
  }, [y_orig]);

  useEffect(() => {
    setY(imageWidth.current.offsetWidth);
    console.log(imageWidth.current.offsetWidth);
    console.log(imageWidth.current.offsetHeight);
  }, [imageWidth.current ? imageWidth.current.offsetWidth : 0]);

  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: y_orig,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  );

  useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) =>
        api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / y_orig, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
      onWheel: ({ event, offset: [, y] }) => {
        event.preventDefault();
        wheelApi.set({ wheelY: y });
      },
    },
    { domTarget, eventOptions: { passive: false } }
  );

  console.log(wheelY.get());
  return (
    <div className="flex items-center h-full justify-center md:w-1/2">
      <animated.div
        ref={domTarget}
        className={styles.card}
        style={{
          transform: "perspective(900px)",
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}
      >
        <animated.div ref={imageWidth} style={{ transform: wheelY.to(wheel) }}>
          {imgs.map((img, i) => (
            <div
              key={i}
              style={{ backgroundImage: `url(${img})` }}
              className="bg-cover bg-center bg-no-repeat "
            />
          ))}
        </animated.div>
      </animated.div>
    </div>
  );
}
