import { User, NewTrack } from "./interfaces";
export enum ActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  ADD_NEW_TRACK = "ADD_NEW_TRACK",
}

interface FetchUsersAction {
  type: ActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
  type: ActionTypes.FETCH_USERS_SUCCESS;
  payload: User[];
}
interface FetchUsersErrorAction {
  type: ActionTypes.FETCH_USERS_ERROR;
  payload: string;
}
interface AddNewTrack {
  type: ActionTypes.ADD_NEW_TRACK;
  payload: NewTrack;
}
export type Action =
  | FetchUsersAction
  | FetchUsersErrorAction
  | FetchUsersSuccessAction
  | AddNewTrack;
