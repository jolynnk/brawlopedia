import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Comparison from "./components/Comparison";
import NavBar from "./components/NavBar";
import GameModes from "./components/GameModes";
import GameInfo from "./components/GameInfo";
import Maps from "./components/Maps";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <img
            src="../brawlopedia_logo.png"
            width="300px"
            className="logo"
          ></img>
        </div>
        <div className="col-md-4"></div>
      </div>

      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Navigate replace to="/mainpage" />} />
        <Route path="/gameinfo" element={<GameInfo></GameInfo>}></Route>
        <Route path="/mainpage" element={<Mainpage></Mainpage>}></Route>
        <Route path="/gamemodes" element={<GameModes></GameModes>}></Route>
        <Route path="/maps" element={<Maps></Maps>}></Route>
        <Route path="/comparison" element={<Comparison></Comparison>}></Route>
      </Routes>
    </div>
  );
}

export default App;
