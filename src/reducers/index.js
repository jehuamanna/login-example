import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import usersData from "./usersData";

export default combineReducers({
  auth,
  message,
  usersData,
});
