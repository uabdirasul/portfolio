import React from "react";

// Style
import "../scss/components/_education.scss";

// Icon
import LinkIcon from "../assets/link-icon.svg";

const Education = ({
  courseYear,
  courseName,
  courseLink,
  courseTechnologies,
}) => {
  return (
    <div className="course">
      <p className="course__year">{courseYear}</p>
      <div className="course__info">
        <a className="course__name" href={courseLink} target="blank">
          {courseName}
        </a>
        <img className="link-icon" src={LinkIcon} alt="Link Icon" />
        <p className="course__technologies">{courseTechnologies}</p>
      </div>
    </div>
  );
};

export default Education;
