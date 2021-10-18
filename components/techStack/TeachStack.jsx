import { render } from "react-dom";
import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture-legacy";
import styles from "./styles.module.css";

const cards = [
  {
    name: "React.js",
    image: "https://img.icons8.com/office/150/000000/react.png",
    description:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces or UI components. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
  },
  {
    name: "Node.js",
    image: "https://img.icons8.com/color/150/000000/nodejs.png",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
  },
  {
    name: "Express.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    description:
      "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
  },
  {
    name: "MongoDB",
    image: "https://img.icons8.com/color/150/000000/mongodb.png",
    description:
      "MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. It was created by MongoDB Inc. and released under the open-source BSD license on April 12, 2012.",
  },
  {
    name: "Next.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png",
    description:
      "Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side       rendering and generating static websites.",
  },
  {
    name: "Vue.js",
    image: "https://img.icons8.com/color/150/000000/vue-js.png",
    description:
      "Vue.js is a progressive framework for building user interfaces. It is a view layer for building UI components with data-driven logic. It is a minimalistic framework for building user interfaces.",
  },
  {
    name: "Angular.js",
    image: "https://img.icons8.com/color/150/000000/angularjs.png",
    description:
      "ngularJS is a structural framework for dynamic web apps. With AngularJS, designers can use HTML as the template language and it allows for the extension of HTML's syntax to convey the application's components effortlessly.",
  },
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 15,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div className={styles.all}>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i}
          style={{
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`
            ),
          }}
        >
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              // backgroundImage: `url(${cards[i]})`,
            }}
          />
          <animated.div
            {...bind(i)}
            style={{
              width: "inherit",
              height: "inherit",
              position: "absolute",

              transform: interpolate([rot, scale], trans),
            }}
            className="flex flex-col justify-around items-center"
          >
            <h1 className="text-3xl font-Poppins">{cards[i].name}</h1>
            <img src={cards[i].image} className="w-1/2" />
            <p className="text-lg p-2 font-Poppins">{cards[i].description}</p>
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}

export default Deck;
