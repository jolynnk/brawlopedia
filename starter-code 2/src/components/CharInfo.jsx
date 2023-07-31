import React from "react";
import Details from "./Details";
import { Link } from "react-router-dom";

const CharInfo = (props) => {
  return (
    <>
      <div className="card" style={{ width: "14rem" }}>
        <img src={props.image} className="card-img-top"></img>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          {/* <a href="#" className="btn btn-primary">
            Details
          </a> */}
          <button>
          <Link to="/details">Details</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CharInfo;
