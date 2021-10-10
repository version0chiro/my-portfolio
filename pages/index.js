import Head from "next/head";
import Welcome from "../components/Welcome";
import { Store } from "../utils/Store";
import { useContext, useState } from "react";
import { useTransition, animated } from "react-spring";

export default function Home() {
  const { state, dispatch } = useContext(Store);

  const { show } = state;

  const transition = useTransition(show, {
    from: { x: -100, y: 800,z:0, opacity: 0 },
    enter: { x: 0, y: 0,z:1, opacity: 1 },
    leave: { x: 100, y: 800,z:0, opacity: 0 },
    config: { delay: 0, duration: 1000 },
  });

  return (
    <div>
      <Head>
        <title>Sachin Singh Bhadoriya</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col justify-center text-center min-h-screen">
        {/* {toggle && <Welcome />} */}
        <button
            onClick={() => {
              dispatch({ type: "hideAll" });
            }}
            className="animate-bounce border-2 m-4 p-2 rounded-md bg-gradient-to-r from-noButton-from to-noButton-to"
          >
            <h1 className="font-Poppins text-xl">Go back 😔</h1>
          </button>
        {transition((style, item) => {
          console.log(item);
          return !item ? (
            <animated.div style={style}>
              <Welcome />
            </animated.div>
          ) : (
            <animated.div style={style}>
              <h1>Rest of the stuff comes here</h1>
            </animated.div>
          );
        })}
      </main>

      <footer></footer>
    </div>
  );
}
