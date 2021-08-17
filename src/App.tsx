import React from "react";
import "./App.css";
import { Switch, Redirect } from "react-router-dom";
import Layout from "./containers/Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
