import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { tracksReducer } from "./tracksReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  tracks: tracksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
