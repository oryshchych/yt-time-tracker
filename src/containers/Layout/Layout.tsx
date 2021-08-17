import React from "react";
import classes from "./Layout.module.css";
import Header from "../../components/Header/Header";

const Layout: React.FC = (props) => {
  return (
    <div>
      <Header />
      <main className={classes.Content}>{props.children}</main>
    </div>
  );
};

export default Layout;
