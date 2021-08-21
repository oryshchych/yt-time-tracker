import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <NavLink activeClassName={classes.Active} to="/">
        Tracker
      </NavLink>
      <NavLink activeClassName={classes.Active} to="/tracks">
        List of tracked items
      </NavLink>
    </nav>
  );
};
