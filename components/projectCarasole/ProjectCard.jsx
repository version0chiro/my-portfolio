import React from "react";

function ProjectCard(props) {
  return (
    <div>
      <div className="bg-white w-full rounded flex flex-col justify-center text-center">
        <h1 className="font-Poppins text-3xl">{props.title}</h1>

        <img
          src={props.img}
          alt="project"
          className="w-full h-64 object-contain"
        />

        <p className="font-Poppins text-xl">{props.description}</p>

        <a href={props.url}>
          <button className="border-2 p-2 rounded-md m-4 bg-gradient-to-r from-yesButton-from to-yesButton-to z-50">
            Project Link
          </button>
        </a>
      </div>
    </div>
  );
}

function CardArrow(props) {
  return (
    <div>
      {props.isLeft ? (
        <div>
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
