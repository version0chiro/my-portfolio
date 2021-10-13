import { useSpringCarousel } from "react-spring-carousel-js";

const ProjectCarasole = () => {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      items: [
        {
          id: "item-1",
          renderItem: <div>Item 1</div>,
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
    >
      <button onClick={slideToPrevItem}>Prev</button>
      {carouselFragment}
      <button onClick={slideToNextItem}>Next</button>
    </div>
  );
};

export default ProjectCarasole;
