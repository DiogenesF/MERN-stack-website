import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Sidebar from "./layout/Sidebar";
import Teste from "./layout2/Teste";
import Navbar from "./layout/Navbar";
import store from "../store/store";

const MainComponent = (props) => {
  return (
    <Provider store={store}>
      <Router>
        <Teste />
      </Router>
    </Provider>
  );
};

export default MainComponent;
