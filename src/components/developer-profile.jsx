import React from "react";

// Image
import ProfileImage from "../assets/ubbiniyazov.jpg";

// Style
import "../scss/components/_developer-profile.scss";

const DeveloperProfile = () => {
  return (
    <div className="developer-profile">
      <div className="developer-profile__container">
        <img
          className="developer-profile__image"
          src={ProfileImage}
          alt="Ubbiniyazov"
          width="100"
          height="100"
        />
        <div className="developer-profile__details">
          <h1 className="developer-profile__name">Abdi Rasul Ubbiniyazov</h1>
          <p className="developer-profile__job">Aspiring Frontend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperProfile;
