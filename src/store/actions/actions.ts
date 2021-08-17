import * as actionTypes from "./action-types";
import axios from "axios";
import { User } from "../../interfaces/users";
import { ThunkDispatch as Dispatch } from "redux-thunk";

export const fetchUsers = () => {
  return (dispatch: Dispatch<any, any, any>) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((err) => {
        console.log("Sth wrong!");
      });
  };
};

export const fetchUsersSuccess = (users: User[]) => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    users: users,
  };
};

export const fetchUsersFail = (error: Error) => {
  return {
    type: actionTypes.FETCH_USERS_FAIL,
    error: error,
  };
};
