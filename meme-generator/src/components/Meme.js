import React from "react";
import memesData from "../memesData";

const logMemeUrl = () => {
  const randomNumber = Math.floor(Math.random() * (99 - 0 + 1));
  console.log(memesData.data.memes[randomNumber].url);
};

const Meme = () => {
  return (
    <main>
      <div className="form">
        <div className="inputs">
          <input type="text" placeholder="Top Text" />
          <input type="text" placeholder="Bottom Text" />
        </div>
        <button className="submitButton" onClick={logMemeUrl}>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
};

export default Meme;
