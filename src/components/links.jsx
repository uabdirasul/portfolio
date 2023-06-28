import React from "react";

// Styles
import "../scss/components/_links.scss";

// Link Icon
import LinkIcon from "../assets/link-icon.svg";

const Links = () => {
  return (
    <div className="links">
      <h2 className="section-header">Links</h2>
      <div className="networking-platforms">
        <div className="networking-platforms__names">
          <p className="networking-platform__name">GitHub</p>
          <p className="networking-platform__name">Telegram</p>
          <p className="networking-platform__name">LinkedIn</p>
          <p className="networking-platform__name">Gmail</p>
        </div>
        <div className="networking-platforms-links">
          <div className="networking-platform__link">
            <a href="https://github.com/uabdirasul/" target="blank">
              @uabdirasul
            </a>
            <img className="link-icon" src={LinkIcon} alt="Link Icon" />
          </div>
          <div className="networking-platform__link">
            <a href="https://t.me/ubbin1yazov" target="blank">
              @ubbin1yazov
            </a>
            <img className="link-icon" src={LinkIcon} alt="Link Icon" />
          </div>
          <div className="networking-platform__link">
            <a href="https://www.linkedin.com/in/uabdirasul" target="blank">
              @uabdirasul
            </a>
            <img className="link-icon" src={LinkIcon} alt="Link Icon" />
          </div>
          <div className="networking-platform__link">
            <a href="mailto:ubbiniyazov04@gmail.com" target="blank">
              @ubbiniyazov04
            </a>
            <img className="link-icon" src={LinkIcon} alt="Link Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
