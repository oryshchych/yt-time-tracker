import * as actionTypes from "./action-types";

export const fetchUsers = () => {
  return {
    type: actionTypes.FETCH_USERS,
  };
};
