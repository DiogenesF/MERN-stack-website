import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";

import store from "../store/store";
import Datatable from "./table/Datatable";

const MainComponent = (props) => {
  return (
    <Provider store={store}>
      <Router>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div className="container-fluid">
                <Switch>
                  <Route exact path="/" component={Datatable} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default MainComponent;
