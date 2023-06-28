import React from "react";

// Components
import DeveloperProfile from "components/developer-profile";
import About from "components/about";
import ProjectsWrapper from "components/projects-wrapper";
import EducationWrapper from "components/education-wrapper";
import Skills from "components/skills";
import Links from "components/links";

// Style
import "../scss/layouts/_main.scss";

const Main = () => {
  return (
    <main className="main container">
      <DeveloperProfile />
      <About />
      <ProjectsWrapper />
      <EducationWrapper />
      <Skills />
      <Links />
    </main>
  );
};

export default Main;
