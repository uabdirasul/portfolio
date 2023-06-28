import React from "react";

// Component
import PersonalProject from "./personal-project";

// Style
import "../scss/components/_projects-wrapper.scss";

// Images
import SpotifyAnalog from "../assets/spotify-analog.webp";
import GameFinder from "../assets/game-finder.webp";
import Replace from "../assets/replace.webp";

const ProjectsWrapper = () => {
  return (
    <div className="projects-wrapper">
      <h2 className="section-header">Pet Projects</h2>
      <PersonalProject
        projectImg={GameFinder}
        projectName="Game Finder App"
        projectLink="https://game-finder-app.netlify.app/"
        projectLinkGit="https://github.com/uabdirasul/game-finder"
        projectInfo="An app that helps to find information about games"
        usedTech={
          "React • Redux • Redux Thunk • Axios • Framer Motion • Styled Components"
        }
      />
      <PersonalProject
        projectImg={SpotifyAnalog}
        projectName="Spotify Clone"
        projectLink="https://spotify-analog.netlify.app/"
        projectLinkGit="https://github.com/uabdirasul/spotify-analog"
        projectInfo="A mini clone of spotify"
        usedTech={"React • SCSS"}
      />
      <PersonalProject
        projectImg={Replace}
        projectName="Replace"
        projectLink="https://replaceletter.netlify.app/"
        projectLinkGit="https://github.com/uabdirasul/replace"
        projectInfo="An app that helps to convert old style Karakalpak letters to modern style letters"
        usedTech={"React"}
      />
    </div>
  );
};

export default ProjectsWrapper;
