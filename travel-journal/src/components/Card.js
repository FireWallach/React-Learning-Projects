import React from "react";
import Ping from "./ping.png";

const Card = (props) => {
  console.log(props.info.imageUrl);
  return (
    <div className="card">
      <img className="preview" src={props.info.imageUrl} alt="MainImage" />
      <div className="card-content">
        <div className="location">
          <img src={Ping} alt="ping" />
          <h3>{props.info.location.toUpperCase()}</h3>
          <a href={props.info.googleMapsUrl}>View on Google maps</a>
        </div>
        <h1 id="title">{props.info.title}</h1>
        <p id="date">
          {props.info.startDate} - {props.info.endDate}
        </p>
        <p className="description">{props.info.description}</p>
      </div>
    </div>
  );
};

export default Card;
