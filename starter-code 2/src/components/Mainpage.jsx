import React, { useState, useEffect } from "react";
import CharInfo from "./CharInfo";
import Details from "./Details";
import GameModes from "./GameModes";

const Mainpage = () => {
  const [charInfo, setCharInfo] = useState([]);

  //get character info
  const getData = async () => {
    const res = await fetch("https://api.brawlapi.com/v1/brawlers");
    const data = await res.json();
    setCharInfo(data.list);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <h2>{JSON.stringify(charInfo.list)}</h2> */}

      <div className="row">
        {charInfo.map((item) => {
          return (
            <CharInfo
              key={item.id}
              id={item.id}
              image={item.imageUrl2}
              name={item.name}
              description={item.description}
              brawlerType={item.class.name}
              gadgetName1={item.gadgets[0].name}
              gadgetName2={item.gadgets[1].name}
              gadgetDesc1={item.gadgets[0].description}
              gadgetDesc2={item.gadgets[1].description}
              starPowerName1={item.starPowers[0].name}
              starPowerName2={item.starPowers[1].name}
              starPowerDesc1={item.starPowers[0].description}
              starPowerDesc2={item.starPowers[1].description}
            ></CharInfo>
          );
        })}
      </div>
    </>
  );
};

export default Mainpage;
