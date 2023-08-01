import React, { useState, useEffect } from "react";

const Comparison = () => {
  const [charInfo, setCharInfo] = useState([]);
  const [selectedChar, setSelectedChar] = useState([]);

  const getData = async () => {
    const res = await fetch("https://api.brawlapi.com/v1/brawlers");
    const data = await res.json();
    setCharInfo(data.list);
  };

  useEffect(() => {
    getData();
  }, []);

  const addToCompare = (item) => {
    setSelectedChar((selectedChar) => [...selectedChar, item]);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4">Brawler</div>
        <div className="col-md-4">Gadgets</div>
        <div className="col-md-4">Star Powers</div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        {selectedChar.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
      {/* <br />
      <br />
      <h5 className="comparePage">
        We're working on this feature. Stay tuned!
      </h5> */}
    </>
  );
};

export default Comparison;
