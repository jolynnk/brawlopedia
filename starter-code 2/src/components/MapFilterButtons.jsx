import React from "react";

const MapFilterButtons = ({ filters, activeFilter, onFilterClick }) => {
  return (
    <>
    <br/>
      {filters.map((filter) => (
        <button
          key={filter}
          className={filter === activeFilter ? "active" : ""}
          onClick={() => onFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
      <br/>
      <br/>
    </>
  );
};

export default MapFilterButtons;
