import React from "react";

const MiddleContainer = () => {
  return (
    <div className="middle-container">
      <p className="middle-text">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img
        src={process.env.PUBLIC_URL + "/Images/3.png"}
        alt="tools img"
        className="tools-img"
      />
      <p className="middle-text">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
    </div>
  );
};

export default MiddleContainer;
