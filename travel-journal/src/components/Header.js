import React from "react";
import World from "../world.png"

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <img src={World} alt="World"/>
        <h2>my travel journal.</h2>
      </div>
    </div>
  );
};

export default Header;
