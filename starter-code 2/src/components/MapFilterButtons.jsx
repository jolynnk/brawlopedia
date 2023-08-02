import React from "react";

//reference for filter function: ChatGPT (question asked: "how to create search filter buttons in react")
//if current filter button matches activeFilter (button selected), className updated to active so colour will be updated
const MapFilterButtons = (props) => {
  return (
    <>
      <br />
      {props.filterOptions.map((filter) => (
        <button
          key={filter}
          className={filter === props.activeFilter ? "active" : ""}
          onClick={() => props.handleFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
      <br />
      <br />
    </>
  );
};

export default MapFilterButtons;
