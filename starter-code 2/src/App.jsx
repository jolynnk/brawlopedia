import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Comparison from "./components/Comparison";
import NavBar from "./components/NavBar";
import GameModes from "./components/GameModes";
import GameInfo from "./components/GameInfo";

function App() {
  return (
    <div className="container">
      <h1>Braaawlopedia</h1>
      <NavBar></NavBar>
      <Routes>
        {/* <Route path="/" element={<Navigate replace to="/mainpage" />} /> */}
        <Route path="/gameinfo" element={<GameInfo></GameInfo>}></Route>
        <Route path="/mainpage" element={<Mainpage></Mainpage>}></Route>
        <Route path="/gamemodes" element={<GameModes></GameModes>}></Route>
        <Route path="/comparison" element={<Comparison></Comparison>}></Route>
      </Routes>
    </div>
  );
}

export default App;
