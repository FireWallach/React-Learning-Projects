import React from "react";
import memesData from "../memesData";

const Meme = () => {
  const [state, setState] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    allMemeImages: memesData.data.memes,
  });
  const getMeme = () => {
    const randomNumber = Math.floor(Math.random() * (99 - 0 + 1));
    setState((prevState) => {
      return {
        ...prevState,
        randomImage: state.allMemeImages[randomNumber].url,
      };
    });
  };

  return (
    <main>
      <div className="form">
        <div className="inputs">
          <input type="text" placeholder="Top Text" />
          <input type="text" placeholder="Bottom Text" />
        </div>
        <button className="submitButton" onClick={getMeme}>
          Get a new meme image 🖼
        </button>
      </div>
      {state.randomImage && (
        <img className="meme" src={state.randomImage} alt="Meme" />
      )}
    </main>
  );
};

export default Meme;
