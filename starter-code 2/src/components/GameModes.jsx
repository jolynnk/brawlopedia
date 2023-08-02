import React, { useState, useEffect } from "react";
import GameModesDisplay from "./GameModesDisplay";

const GameModes = (props) => {
  const [gameModes, setGameModes] = useState([]);

  //get game modes info
  const getGameModes = async () => {
    const res = await fetch("https://api.brawlapi.com/v1/gamemodes");
    const data = await res.json();
    setGameModes(data.list);
  };

  useEffect(() => {
    getGameModes();
  });

  return (
    <>
      <br />
      <br />
      <div className="row">
        {gameModes.map((item) => {
          return (
            <GameModesDisplay
              key={item.id}
              id={item.id}
              gameName={item.name}
              gameImage={item.imageUrl}
              gameInstructions={item.tutorial}
            ></GameModesDisplay>
          );
        })}
      </div>
    </>
  );
};

export default GameModes;
