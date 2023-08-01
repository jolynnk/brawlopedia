import React, { useState, useEffect } from "react";
import MapsDisplay from "./MapsDisplay";

const Maps = () => {
  const [maps, setMaps] = useState([]);
  const [search, setSearch] = useState("");

  //get maps info
  const getMaps = async () => {
    const res = await fetch("https://api.brawlapi.com/v1/maps");
    const data = await res.json();
    setMaps(data.list);
  };

  useEffect(() => {
    getMaps();
  });

  return (
    <>
      <input
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search Map Type"
      ></input>
      <br />
      <br />
      <div className="row">
        {maps
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.gameMode.name.toLowerCase().includes(search);
          })
          .map((item) => {
            return (
              <MapsDisplay
                key={item.id}
                id={item.id}
                mapName={item.name}
                mapImage={item.imageUrl}
                mapModeName={item.gameMode.name}
                mapModeIcon={item.gameMode.imageUrl}
              ></MapsDisplay>
            );
          })}
      </div>
    </>
  );
};

export default Maps;
