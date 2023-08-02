import React from "react";

const ComparisonDisplay = (props) => {
  return (
    <>
      <div className="row compareList">
        <div className="col-sm-1">{props.name}</div>
        {/* <div className="col-sm-1">{props.brawlerType}</div> */}
        <div className="col-sm-1">{props.gadgetName1}</div>
        <div className="col-sm-1">{props.gadgetDesc1}</div>
        <div className="col-sm-1">{props.gadgetName2}</div>
        <div className="col-sm-2">{props.gadgetDesc2}</div>
        <div className="col-sm-1">{props.starPowerName1}</div>
        <div className="col-sm-2">{props.starPowerDesc1}</div>
        <div className="col-sm-1">{props.starPowerName2}</div>
        <div className="col-sm-2">{props.starPowerDesc2}</div>
        <hr></hr>
      </div>
    </>
  );
};

export default ComparisonDisplay;
