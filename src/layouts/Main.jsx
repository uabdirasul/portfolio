import React from "react";

// Components
import DeveloperProfile from "components/developer-profile";
import About from "components/about";

// Style
import "../scss/layouts/_main.scss";

const Main = () => {
  return (
    <main className="main container">
      <DeveloperProfile />
      <About />
    </main>
  );
};

export default Main;
