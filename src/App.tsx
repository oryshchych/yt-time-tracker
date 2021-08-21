import React from "react";
import "./App.css";
import { Switch, Redirect, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Tracker from "./containers/Tracker/Tracker";
import TrackList from "./containers/TrackList/TrackList";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Tracker} />
        <Route path="/tracks" exact component={TrackList} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
