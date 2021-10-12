import React, { useRef, useEffect } from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useGesture } from "react-use-gesture";
// import imgs from "./data";

const imgs = [
  "./selfPics/1.jpeg",
  "./selfPics/2.jpeg",
  "./selfPics/3.jpeg",
  "./selfPics/4.jpeg",
  "./selfPics/5.jpeg",
  "./selfPics/7.jpeg",
  "./selfPics/8.jpeg",
  "./selfPics/9.jpeg",
];

import styles from "./styles.module.css";

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;

const wheel = (y) => {
  const imgHeight = window.innerWidth * 0.3 - 20;
  return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`;
};

export default function App() {
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener("gesturestart", preventDefault);
    document.addEventListener("gesturechange", preventDefault);

    return () => {
      document.removeEventListener("gesturestart", preventDefault);
      document.removeEventListener("gesturechange", preventDefault);
    };
  }, []);

  const domTarget = useRef(null);
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  );

  const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }));

  useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) =>
        api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
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
        <animated.div style={{ transform: wheelY.to(wheel) }}>
          {imgs.map((img, i) => (
            <div
              key={i}
              style={{ backgroundImage: `url(${img})` }}
              className="bg-cover bg-center bg-no-repeat"
            />
          ))}
        </animated.div>
      </animated.div>
    </div>
  );
}
