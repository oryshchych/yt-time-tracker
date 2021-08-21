import { UsersStoreState } from "../../interfaces/interfaces";
import { Action, ActionTypes } from "../../interfaces/actions";

const initialState: UsersStoreState = {
  users: [],
  loading: false,
  error: null,
};

export const usersReducer = (
  state = initialState,
  action: Action
): UsersStoreState => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS:
      return Object.assign({}, state, { loading: true, error: null });
    case ActionTypes.FETCH_USERS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        users: action.payload,
        error: null,
      });
    case ActionTypes.FETCH_USERS_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.payload,
      });
    default:
      return state;
  }
};
