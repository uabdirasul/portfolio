import React from "react";

// Components
import DeveloperProfile from "components/developer-profile";
import About from "components/about";
import ProjectsWrapper from "components/projects-wrapper";

// Style
import "../scss/layouts/_main.scss";

const Main = () => {
  return (
    <main className="main container">
      <DeveloperProfile />
      <About />
      <ProjectsWrapper />
    </main>
  );
};

export default Main;
