import React from "react";

// Style
import "./scss/base/_base.scss";

// Components
import Header from "layouts/Header";
import Main from "layouts/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
