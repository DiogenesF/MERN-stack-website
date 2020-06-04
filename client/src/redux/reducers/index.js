import { combineReducers } from "redux";
import portifolio from "./portifolio";
import auth from "./auth";

export default combineReducers({ portifolio, auth });
