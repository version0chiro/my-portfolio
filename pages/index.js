import Head from "next/head";
import Welcome from "../components/Welcome";
import { Store } from "../utils/Store";
import { useContext, useState } from "react";
import { useTransition, animated } from "react-spring";
import Parallax from "../components/Parallax";

export default function Home() {
  const { state, dispatch } = useContext(Store);

  const { show } = state;

  const transition = useTransition(show, {
    from: { opacity: 0, display: "none" },
    enter: { opacity: 1, display: "block" },
    leave: { opacity: 0, display: "none" },
    config: { delay: 500, duration: 1000 },
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

      <main className=" flex flex-col justify-center text-center min-h-screen">
        {/* {toggle && <Welcome />} */}

        {transition((style, item) => {
          console.log(item);
          return !item ? (
            <animated.div style={style}>
              <Welcome />
            </animated.div>
          ) : (
            <animated.div style={style}>
              <Parallax />
            </animated.div>
          );
        })}
      </main>

      <footer></footer>
    </div>
  );
}
