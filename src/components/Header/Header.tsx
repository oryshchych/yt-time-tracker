import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { Navigation } from "../Navigation/Navigation";

const header = () => {
  return (
    <header className={classes.Header}>
      <Link to="/">YT - Timer Tracker</Link>
      <Navigation />
    </header>
  );
};

export default header;
