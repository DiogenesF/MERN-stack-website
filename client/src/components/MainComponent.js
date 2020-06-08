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
import PortifoliosCreate from "./pagecreate/PortifoliosCreate";
import { getUser } from "../redux/actions/auth";
import PortifoliosEdit from "./pageedit/PortifoliosEdit";
import PortifoliosDetail from "./pagedetails/PortifoliosDetail";
import { getCategorias } from "../redux/actions/categoria";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const MainComponent = (props) => {
  useEffect(() => {
    store.dispatch(getUser());
    store.dispatch(getCategorias());
  }, []);

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
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute
                    exact
                    path="/admin/portifolios"
                    component={Portifolio}
                  />
                  <PrivateRoute
                    exact
                    path="/admin/portifolios/create"
                    component={PortifoliosCreate}
                  />
                  <PrivateRoute
                    exct
                    path="/admin/portifolios/edit/:portId"
                    component={PortifoliosEdit}
                  />
                  <PrivateRoute
                    exct
                    path="/admin/portifolios/:portId"
                    component={PortifoliosDetail}
                  />
                  <Route component={Notfound} />
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
