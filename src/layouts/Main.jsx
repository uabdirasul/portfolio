import React from "react";

// Component
import DeveloperProfile from "components/developer-profile";

// Style
import "../scss/layouts/_main.scss";

const Main = () => {
  return (
    <main className="main">
      <DeveloperProfile />
    </main>
  );
};

export default Main;
