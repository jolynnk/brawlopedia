import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
        <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/gameinfo"
            >
              Game Info
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/mainpage"
            >
              Brawler List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/gamemodes"
            >
              Game Modes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/comparison"
            >
              Compare Brawlers
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
