import React from "react";

// Style
import "../scss/layouts/_header.scss";

// Logo
import LogoImg from "../assets/ubbiniyazov.svg";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header-logo">
        <img
          className="header-logo-img"
          src={LogoImg}
          alt="Ubbiniyazov Logo"
          width="176"
          height="33"
        />
      </a>
      <a className="button cta-button" href="mailto:ubbiniyazov04@gmail.com">
        Email me
      </a>
    </header>
  );
};

export default Header;
