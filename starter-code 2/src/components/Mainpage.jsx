import React, { useState, useEffect } from "react";
import CharInfo from "./CharInfo";

const Mainpage = () => {
  const [charInfo, setCharInfo] = useState([]);
  const [search, setSearch] = useState("");

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
      <input
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search Brawler"
      ></input>
      {/* <h2>{JSON.stringify(charInfo.list)}</h2> */}
      <br />
      <br />
      {/* filter function goes thru charInfo array. checks if search variable is an empty string, if it is then condition is true and item will be included in filtered result. if false, will check if item text includes search variable */}
      {/* search function reference: https://www.youtube.com/watch?v=xAqCEBFGdYk */}
      <div className="row">
        {charInfo
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((item) => {
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
                gadgetImage={item.gadgets[0].imageUrl}
                starPowerName1={item.starPowers[0].name}
                starPowerName2={item.starPowers[1].name}
                starPowerDesc1={item.starPowers[0].description}
                starPowerDesc2={item.starPowers[1].description}
                starPowerImage={item.starPowers[0].imageUrl}
                charInfo={charInfo}
              ></CharInfo>
            );
          })}
      </div>
    </>
  );
};

export default Mainpage;
