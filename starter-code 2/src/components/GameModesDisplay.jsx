import React from "react";

const GameModesDisplay = (props) => {
  return (
    <>
      <div className="card" style={{ width: "14rem" }}>
        <img src={props.gameImage} className="card-img-top" id="gameImage"></img>
        <div className="card-body">
          <h5 className="card-title">{props.gameName}</h5>
          <p className="card-text">{props.gameInstructions}</p>
        </div>
      </div>
    </>
  );
};

export default GameModesDisplay;
