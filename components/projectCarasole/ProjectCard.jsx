import React from "react";

function ProjectCard() {
  return (
    <div>
      <div className="bg-white w-full rounded flex flex-col justify-center text-center">
        <h1>Project Title</h1>

        <img
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="project"
        />

        <p>
          Witness quality Reddit memes right in your VS Code editor! And the
          best part? It only uses the side bar! So your coding will be
          uninterrupted but your meme knowledge will go to the moon 🚀🚀 !
        </p>
      </div>
    </div>
  );
}

function CardArrow(props) {
  return (
    <div>
      {props.isLeft ? (
        <div >
        
          <img
            src="https://img.icons8.com/ios/50/000000/chevron-left.png"
            alt="left arrow"
          />
        </div>
      ) : (
        <div>
          <img
            src="https://img.icons8.com/ios/50/000000/chevron-right.png"
            alt="right arrow"
          />
        </div>
      )}
    </div>
  );
}

export { ProjectCard, CardArrow };
