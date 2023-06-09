import React from "react";
import Card from "./Card";
import data from "../data";

const MainContent = () => {
  const cards = data.map((item) => {
    return (
      <div className="card-container">
        <Card info={item} />
      </div>
    );
  });

  return <div className="main-content">{cards}</div>;
};

export default MainContent;
