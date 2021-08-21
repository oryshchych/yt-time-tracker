import { Action, ActionTypes } from "../../interfaces/actions";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: ActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.FETCH_USERS_ERROR,
        payload: "Error while loading users",
      });
    }
  };
};
