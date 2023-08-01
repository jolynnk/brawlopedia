import React, { useState, useEffect } from "react";
import CharInfo from "./CharInfo";

const Mainpage = () => {
  const [charInfo, setCharInfo] = useState([]);
  // const [data, setData] = useState(charInfo);
  // const [sortOrder, setSortOrder] = useState("ascending");

  //sorting function
  // const handleSort = () => {
  //   const sortedData = [...data].sort((a, b) => {
  //     if (sortOrder === "ascending") {
  //       return a.name.localeCompare(b.name);
  //     } else {
  //       return b.name.localeCompare(a.name);
  //     }
  //   });

  //   setData(sortedData);
  //   setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
  // };

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
      {/* <select>
        {charInfo.map((item) => (
          <option key={item.name}>{item.name}</option>
        ))}
      </select> */}

      {/* <div className="container">
        <p>Sort Alphabetically</p>
        <button onClick={handleSort}>
          Sort {sortOrder === "ascending" ? "Descending" : "Ascending"}
        </button>
        <ul>
          {charInfo.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div> */}
      <br />
      <br/>
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
