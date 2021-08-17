import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const header = () => {
  return (
    <header className={classes.Header}>
      <div>
        <NavLink to="/">YT - Timer Tracker</NavLink>
      </div>
    </header>
  );
};

export default header;
