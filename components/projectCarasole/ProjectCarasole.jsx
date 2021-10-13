import { useSpringCarousel } from "react-spring-carousel-js";

import { ProjectCard, CardArrow } from "./ProjectCard";

const ProjectCarasole = () => {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      items: [
        {
          id: "item-1",
          renderItem: (
            <ProjectCard
              title="Reddit memes"
              description={`Witness quality Reddit memes right in your VS Code editor! And the best part? It only uses the side bar! So your coding will be uninterrupted but your meme knowledge will go to the moon 🚀🚀 !`}
              url="https://github.com/version0chiro/VS-Meme-Reddit"
              img="./Projects/VSCodeMeme.png"
            />
          ),
        },
        {
          id: "item-2",
          renderItem: (
            <ProjectCard
              title="Find Me Issues"
              description={`A React.js based web-app to find repositories containing 'good first issues' open source contribution. Any kind of contribution and suggestions are highly appreciated!`}
              url="https://github.com/version0chiro/Find-Me-Issues"
              img="./Projects/FindMeIssues.png"
            />
          ),
        },
        {
          id: "item-3",
          renderItem: (
            <ProjectCard
              title="Work Safe"
              description={`A contact-less screening device for measurement of SPO2, Heart rate, Temperature all in one device.
Integrated an authentication system, AI face recognition  based on wireless network connection.`}
              url="https://www.hackster.io/TheBluePhoenix/worksafe-cv-based-multiparameter-monitoring-and-diagnostics-bdf042"
              img="https://hackster.imgix.net/uploads/attachments/1346542/_zNPTmdfgDc.blob?auto=compress%2Cformat&w=900&h=675&fit=min"
            />
          ),
        },
      ],
    });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "60px 1fr 60px",
      }}
      className=" md:w-1/2 justify-around h-full"
    >
      <button onClick={slideToPrevItem}>
        <CardArrow isLeft={true} className="h-full" />
      </button>

      {carouselFragment}

      <button onClick={slideToNextItem}>
        <CardArrow isLeft={false} />
      </button>
    </div>
  );
};

export default ProjectCarasole;
