import { useSpringCarousel } from "react-spring-carousel-js";

import { ProjectCard, CardArrow } from "./ProjectCard";

const ProjectCarasole = () => {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      items: [
        {
          id: "item-1",
          renderItem: <ProjectCard>Item 1</ProjectCard>,
        },
        {
          id: "item-2",
          renderItem: <div>Item 2</div>,
        },
      ],
    });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "60px 1fr 60px",
      }}
      className=" md:w-1/2"
    >
      <button  onClick={slideToPrevItem}>
          <CardArrow isLeft={true} />
      </button>

      {carouselFragment}

      <button onClick={slideToNextItem}> 
          <CardArrow isLeft={false}  />
      </button>
    </div>
  );
};

export default ProjectCarasole;
