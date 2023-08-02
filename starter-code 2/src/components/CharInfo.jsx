import React, { useState } from "react";
import DetailsModal from "./DetailsModal";

const CharInfo = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card" style={{ width: "14rem" }}>
        <img src={props.image} className="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Details
          </button>
        </div>
      </div>

      {showModal && (
        <DetailsModal
          id={props.id}
          image={props.image}
          name={props.name}
          description={props.description}
          brawlerType={props.brawlerType}
          gadgetName1={props.gadgetName1}
          gadgetName2={props.gadgetName2}
          gadgetDesc1={props.gadgetDesc1}
          gadgetDesc2={props.gadgetDesc2}
          gadgetImage={props.gadgetImage}
          starPowerName1={props.starPowerName1}
          starPowerName2={props.starPowerName2}
          starPowerDesc1={props.starPowerDesc1}
          starPowerDesc2={props.starPowerDesc2}
          starPowerImage={props.starPowerImage}
          setShowModal={setShowModal}
        ></DetailsModal>
      )}
    </>
  );
};

export default CharInfo;
