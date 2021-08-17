import { AnyAction } from "redux";
import * as actionTypes from "../actions/action-types";

const initialState = {
  users: [],
};

const reducers = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_SUCCESS:
      return Object.assign({}, state, { users: action.users });
    default:
      return state;
  }
};

export default reducers;
