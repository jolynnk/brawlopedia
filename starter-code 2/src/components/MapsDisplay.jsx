import React from "react";

const MapsDisplay = (props) => {
  return (
    <>
      <div className="card" style={{ width: "14rem" }}>
        <br />
        <h5 className="card-title">{props.mapName}</h5>
        <p className="card-text">{props.mapModeName}</p>
        <img src={props.mapImage} className="card-img-top"></img>
      </div>
    </>
  );
};

export default MapsDisplay;
