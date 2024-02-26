import React from "react";

const Header = () => {
  return (
    <div>
      <img
        className="logo-img"
        src={process.env.PUBLIC_URL + "/Images/logo.png"}
        alt="logo image"
      />
    </div>
  );
};

export default Header;
