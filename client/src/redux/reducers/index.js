import { combineReducers } from "redux";
import portifolio from "./portifolio";
import auth from "./auth";
import categoria from "./categoria";
import alert from "./alert";

export default combineReducers({ portifolio, auth, categoria, alert });
