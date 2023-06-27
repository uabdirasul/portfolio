import React from "react";

// Component
import Education from "./education";

const EducationWrapper = () => {
  return (
    <div className="education">
      <h2 className="section-header">Education</h2>
      <Education
        courseYear="2021 July"
        courseName="0 to Hero"
        courseLink="https://old.mohirdev.uz/courses/javascript-toliq-kurs-from-0-to-hero/"
        courseTechnologies="JavaScript • OOP • Git • GitHub • npm • Babel • Webpack"
      />
      <Education
        courseYear="2023 May"
        courseName="Interactive React va Redux"
        courseLink="https://telegra.ph/Interaktiv-React-va-Redux-07-31"
        courseTechnologies="React • Redux • Redux Thunk • Version Control • Styled Component • Axios"
      />
    </div>
  );
};

export default EducationWrapper;
