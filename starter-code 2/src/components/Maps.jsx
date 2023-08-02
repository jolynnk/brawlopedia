import React, { useState, useEffect } from "react";
import MapsDisplay from "./MapsDisplay";
import MapFilterButtons from "./MapFilterButtons";

const Maps = () => {
  const [maps, setMaps] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");

  //get maps info
  const getMaps = async () => {
    const res = await fetch("https://api.brawlapi.com/v1/maps");
    const data = await res.json();
    setMaps(data.list);
  };

  useEffect(() => {
    getMaps();
  });

  //reference for filter function: ChatGPT (question asked: "how to create search filter buttons in react")
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  //if activeFilter has truthy value (i.e. a filter was selected),filter iterator will run thru maps array and put into filteredMaps variable all items that are equivalent to activeFilter value. if activeFilter is falsey, display all items.
  const filteredMaps = activeFilter
    ? maps.filter((item) => item.gameMode.name === activeFilter)
    : maps;

  //filter button options
  const filterOptions = [
    "Bounty",
    "Wipeout",
    "Knockout",
    "Brawl Ball",
    "Hot Zone",
    "Boss Fight",
    "Solo Showdown",
    "Duo Showdown",
    "Gem Grab",
    "Takedown",
    "Heist",
    "Robo Rumble",
    "Payload",
    "Volley Brawl",
    "Big Game",
    "Basket Brawl",
  ];

  return (
    <>
      <p className="inputInstructions">Filter by game mode</p>
      <div>
        <MapFilterButtons
          filterOptions={filterOptions}
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        ></MapFilterButtons>
      </div>

      <div className="row">
        {filteredMaps.map((item) => (
          <MapsDisplay
            key={item.id}
            id={item.id}
            mapName={item.name}
            mapImage={item.imageUrl}
            mapModeName={item.gameMode.name}
            mapModeIcon={item.gameMode.imageUrl}
          ></MapsDisplay>
        ))}
      </div>
    </>
  );
};

export default Maps;
