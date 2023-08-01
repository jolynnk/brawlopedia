import React from "react";

const ComparisonDisplay = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-md-2">{props.name}</div>
        <div className="col-md-2">{props.brawlerType}</div>
        <div className="col-md-2">{props.gadgetName1}</div>
        <div className="col-md-2">{props.gadgetName2}</div>
        <div className="col-md-2">{props.starPowerName1}</div>
        <div className="col-md-2">{props.starPowerName2}</div>
      </div>
    </>
  );
};

export default ComparisonDisplay;
