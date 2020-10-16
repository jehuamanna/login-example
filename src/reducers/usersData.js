import { SET_USER_DATA } from "../actions/types";

const initialState = { users: [] };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_DATA:
      return payload;

    default:
      return state;
  }
}
