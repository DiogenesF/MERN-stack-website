import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Sidebar from "./layout/Sidebar";
import PrivateRoute from "./PrivateRoute";
import Navbar from "./layout/Navbar";
import Notfound from "./Notfound";
import Login from "./login/Login";
import store from "../store/store";
import setAuthToken from "../utils/setAuthToken";
import Portifolio from "./table/Portifolio";
import PortifolioCriar from "./pagecreate/PortifoliosCreate";
import { getUser } from "../redux/actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const MainComponent = (props) => {
  useEffect(() => {
    store.dispatch(getUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Navbar />
                <div className="container-fluid">
                  <Switch>
                    <PrivateRoute
                      exact
                      path="/admin/portifolios"
                      component={Portifolio}
                    />
                    <PrivateRoute
                      exact
                      path="/admin/portifolios/create"
                      component={PortifolioCriar}
                    />
                    <PrivateRoute component={Notfound} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    </Provider>
  );
};

export default MainComponent;
