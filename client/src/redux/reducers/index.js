import { combineReducers } from "redux";
import portifolio from "./portifolio";
import auth from "./auth";
import categoria from "./categoria";

export default combineReducers({ portifolio, auth, categoria });
