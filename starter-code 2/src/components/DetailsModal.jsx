import React from "react";
import styles from "./Modal.module.css";

const DetailsModal = (props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <br />
        <div className="row">
          <div className="col-md-4"></div>
          <img src={props.image} className="col-md-4 detailsImage"></img>
          <div className="col-md-4"></div>
        </div>

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 detailsName">{props.name}</div>
          <div className="col-md-4"></div>
        </div>

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 detailsBrawlerType">{props.brawlerType}</div>
          <div className="col-md-4"></div>
        </div>

        <br />

        <div className="row">
          <div className="col-md-1"></div>
          <img src={props.gadgetImage} className="col-md-1 gadgetImage"></img>
          <div className="col-md-1">{props.gadgetName1}</div>
          <div className="col-md-3">{props.gadgetDesc1}</div>
          <img
            src={props.starPowerImage}
            className="col-md-1 gadgetImage"
          ></img>
          <div className="col-md-1">{props.starPowerName1}</div>
          <div className="col-md-3">{props.starPowerDesc1}</div>
          <div className="col-md-1"></div>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <img src={props.gadgetImage} className="col-md-1 gadgetImage"></img>
          <div className="col-md-1">{props.gadgetName2}</div>
          <div className="col-md-3">{props.gadgetDesc2}</div>
          <img
            src={props.starPowerImage}
            className="col-md-1 gadgetImage"
          ></img>
          <div className="col-md-1">{props.starPowerName2}</div>
          <div className="col-md-3">{props.starPowerDesc2}</div>
          <div className="col-md-1"></div>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => props.setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailsModal;
