import React from "react";

const Award = () => {
  return (
    <div className="award-container">
      <h1 className="heading">
        C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
        4th time
      </h1>
      <ul>
        <li className=".child-content">
          CR.1.'s energy efficient products are well recognized by various
          Government Institutions, as trustworthy products for various projects
          across the globe to save energy.
        </li>
        <li className=".child-content">
          CR.L. is the highest contributor in the country for the projects of
          EESI, (Energy Efficiency Services Limited) to replace the old
          inefficient pumps with 5 Star rated energy efficient smart pumps with
          lot enabled control panel.
        </li>
      </ul>
      <img
        src={process.env.PUBLIC_URL + "/Images/2.png"}
        alt="award img"
        className="award-taking"
      />
      <p style={{ width: 920 }} className="about-award">
        Government of India has awarded the
        <span style={{ fontWeight: "bold" }}>
          "National Energy Conservation Award 2018"
        </span>
        . Mr. G. Selvaraj, Joint Managing Director of C.RL. Group received the
        award from Smt. Sumitra Mahajan. Speaker of Lok Sabha & Shri. Raj Kumar
        Singh, Honorable Minister of State.
      </p>
    </div>
  );
};

export default Award;
