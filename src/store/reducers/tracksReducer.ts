import { TracksStoreState } from "../../interfaces/interfaces";
import { Action, ActionTypes } from "../../interfaces/actions";

const initialState: TracksStoreState = {
  tracks: [],
};

export const tracksReducer = (
  state = initialState,
  action: Action
): TracksStoreState => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_TRACK:
      return Object.assign({}, state, {
        tracks: [...state.tracks, [action.payload]],
      });
    default:
      return state;
  }
};
