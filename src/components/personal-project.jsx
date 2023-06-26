import React from "react";

// Style
import "../scss/components/_personal-project.scss";

// Icon
import LinkIcon from "../assets/link-icon.svg";

const PersonalProject = ({
  projectImg,
  projectName,
  projectLink,
  projectLinkGit,
  projectInfo,
  usedTech,
}) => {
  return (
    <div className="personal-project">
      <figure>
        <a href={projectLink} target="blank">
          <img
            className="personal-project__img"
            src={projectImg}
            alt={projectInfo}
            width="444"
            height="278"
          />
        </a>
        <figcaption>
          <a
            className="personal-project__name"
            href={projectLinkGit}
            target="blank"
          >
            {projectName}
          </a>
          <img className="link-icon" src={LinkIcon} alt="Link Icon" />
        </figcaption>
      </figure>
      <p className="personal-project__description">{projectInfo}</p>
      <p className="personal-project__technologies">{usedTech}</p>
    </div>
  );
};

export default PersonalProject;
