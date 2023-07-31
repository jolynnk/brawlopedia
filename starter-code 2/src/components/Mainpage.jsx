import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CharInfo from "./CharInfo";

const Mainpage = () => {
  const [charInfo, setCharInfo] = useState([]);

  const getData = async () => {
    const res = await fetch("https://api.brawlapi.com/v1/brawlers");
    const data = await res.json();
    setCharInfo(data.list);
  };

  useEffect(() => {
    getData();
  });

  // console.log(charInfo);

  return (
    <>
      {/* <h2>{JSON.stringify(charInfo.list)}</h2> */}
      <h2>Brawlopedia</h2>
      <ul>
        <Link to="/page-one/a">A</Link>
      </ul>
      <div className="row">
        {charInfo.map((item) => {
          return (
            <CharInfo
              key={item.id}
              id={item.id}
              image={item.imageUrl}
              name={item.name}
              description={item.description}
            ></CharInfo>
          );
        })}
      </div>
    </>
  );
};

export default Mainpage;
