import React from "react";

// Components
import DeveloperProfile from "components/developer-profile";

// Style
import "../scss/layouts/_main.scss";

const Main = () => {
  return (
    <main className="main container">
      <DeveloperProfile />
    </main>
  );
};

export default Main;
