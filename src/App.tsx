import React from "react";
import "./App.css";
import { Switch, Redirect, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Tracker from "./containers/Tracker/Tracker";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Tracker} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
