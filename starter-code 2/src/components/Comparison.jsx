import React, { useState, useEffect } from "react";
import ComparisonDisplay from "./ComparisonDisplay";

const Comparison = () => {
  const [charInfo, setCharInfo] = useState([]);
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");

  //get character info
  const getData = async () => {
    const res = await fetch("https://api.brawlapi.com/v1/brawlers");
    const data = await res.json();
    setCharInfo(data.list);
  };

  useEffect(() => {
    getData();
  }, []);

  //search function for 2 input fields
  //if either input fields are empty, display all items
  //else, check if char name (in lower case) is = to search query for both inputs
  const checkSearch = (item) => {
    if (search1.toLowerCase() === "" || search2.toLowerCase() === "") {
      return item;
    } else {
      return (
        item.name.toLowerCase().includes(search1) ||
        item.name.toLowerCase().includes(search2)
      );
    }
  };

  return (
    <>
      <p className="inputInstructions">
        Input Brawler names to compare their details
      </p>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>
        <div className="col-md-2">
          <input
            className="compareInput compareInput1"
            onChange={(event) => setSearch1(event.target.value)}
            placeholder="Compare Brawler 1"
          ></input>
        </div>
        <div className="col-md-2">
          <input
            className="compareInput compareInput2"
            onChange={(event) => setSearch2(event.target.value)}
            placeholder="Compare Brawler 2"
          ></input>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>
      </div>
      <br />

      <div className="row compareHeader">
        <div className="col-sm-1">Brawler</div>
        <div className="col-sm-1">Gadget 1</div>
        <div className="col-sm-1">Details</div>
        <div className="col-sm-1">Gadget 2</div>
        <div className="col-sm-2">Details</div>
        <div className="col-sm-1">Star Power 1</div>
        <div className="col-sm-2">Details</div>
        <div className="col-sm-1">Star Power 2</div>
        <div className="col-sm-2">Details</div>
      </div>
      <br />

      <div>
        {charInfo.filter(checkSearch).map((item) => {
          return (
            <ComparisonDisplay
              key={item.id}
              id={item.id}
              image={item.imageUrl2}
              name={item.name}
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
            ></ComparisonDisplay>
          );
        })}
      </div>
    </>
  );
};

export default Comparison;
