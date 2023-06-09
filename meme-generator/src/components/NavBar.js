import React from "react";
import TrollFace from "../Troll Face.png";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img src={TrollFace} alt="Troll Face" />
      <h1 className="title">Meme Generator</h1>
      <h3>React Course - Project 3</h3>
    </div>
  );
};

export default NavBar;
