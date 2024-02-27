import React from "react";
import Award from "./Award";

const FirstContainer = () => {
  return (
    <div className="first-container">
      <div>
        <img
          className="award-img"
          src={process.env.PUBLIC_URL + "/Images/1.png"}
          alt="Award"
        />
      </div>
      <Award />
    </div>
  );
};

export default FirstContainer;
