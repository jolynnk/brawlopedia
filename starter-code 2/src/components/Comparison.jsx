import React, { useState, useEffect } from "react";
import ComparisonDisplay from "./ComparisonDisplay";

const Comparison = () => {
  const [charInfo, setCharInfo] = useState([]);
  const [selectedChar, setSelectedChar] = useState([]);

  const getData = async () => {
    const res = await fetch("https://api.brawlapi.com/v1/brawlers");
    const data = await res.json();
    setCharInfo(data.list);
  };

  console.log(charInfo);

  useEffect(() => {
    getData();
  }, []);

  // const addToCompare = (item) => {
  //   setSelectedChar((selectedChar) => [...selectedChar, item]);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedChar((currState) => {
      return [...currState, { charInfo }];
    });
  };

  return (
    <>
      <br />
      <select>
        {charInfo.map((item) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </select>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Compare
      </button>

      <div className="row compareHeader">
        <div className="col-md-2">Brawler</div>
        <div className="col-md-2">Type</div>
        <div className="col-md-2">Gadget 1</div>
        <div className="col-md-2">Gadget 2</div>
        <div className="col-md-2">Star Power 1</div>
        <div className="col-md-2">Star Power 2</div>
      </div>

      {charInfo.map((item) => {
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

      {/* <div className="row">
        <div className="col-md-4">Brawler</div>
        <div className="col-md-4">Gadgets</div>
        <div className="col-md-4">Star Powers</div>
      </div>
      <div className="row">
        {selectedChar.map((item) => (
          <div className="col-md-4" key={item.id}>
            {item.name}
          </div>
        ))}
        {selectedChar.map((item) => (
          <div className="col-md-4" key={item.id}>
            {item.name}
          </div>
        ))}
        {selectedChar.map((item) => (
          <div className="col-md-4" key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
      {charInfo.map((item) => {
        <ComparisonDisplay
          key={item.id}
          item={item}
          selected={selectedChar}
          addToCompare={addToCompare}
        ></ComparisonDisplay>;
      })} */}
      {/* <br />
      <br />
      <h5 className="comparePage">
        We're working on this feature. Stay tuned!
      </h5> */}
    </>
  );
};

export default Comparison;
