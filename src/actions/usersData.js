import { SET_USER_DATA, SET_MESSAGE } from "./types";

import UserService from "../services/user.service";

export const getUsersData = () => (dispatch) => {
  return UserService.getUsersData().then(
    (data) => {
      dispatch({
        type: SET_USER_DATA,
        payload: data,
      });

      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: SET_MESSAGE,
        payload: "No data found",
      });

      return Promise.reject();
    }
  );
};
