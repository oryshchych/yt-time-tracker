import React from "react";
import "./App.css";
import { Switch, Redirect, Route } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Tracker from "./containers/Tracker/Tracker";
import TrackList from "./containers/TrackList/TrackList";
import TrackDetails from "./containers/TrackDetails/TrackDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Tracker} />
        <Route path="/tracks" exact component={TrackList} />
        <Route path="/track-details/:id" component={TrackDetails} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
