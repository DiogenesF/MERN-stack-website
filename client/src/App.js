import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainComponent from "./components/MainComponent";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faFlag,
  faBars,
  faTimes,
  faGavel,
  faBook,
  faPhone,
  faLessThan,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faFlag,
  faBars,
  faBook,
  faTimes,
  faGavel,
  faPhone,
  faLessThan,
  faSearch
);

function App() {
  return <MainComponent />;
}

export default App;
