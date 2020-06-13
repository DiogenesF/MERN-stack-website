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
  faBook,
  faPhone,
  faLessThan,
  faSearch,
  faUserFriends,
  faEdit,
  faTrash,
  faFileAlt,
  faMapMarkerAlt,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faFlag,
  faBars,
  faBook,
  faTimes,
  faPhone,
  faLessThan,
  faSearch,
  faUserFriends,
  faEdit,
  faTrash,
  faFileAlt,
  faMapMarkerAlt,
  faEnvelope,
  faUser
);

function App() {
  return <MainComponent />;
}

export default App;
