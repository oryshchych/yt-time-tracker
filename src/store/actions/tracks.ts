import { ActionTypes } from "../../interfaces/actions";
import { NewTrack } from "../../interfaces/interfaces";

export const addNewTrack = (newTrack: NewTrack) => {
  return {
    type: ActionTypes.ADD_NEW_TRACK,
    payload: newTrack,
  };
};
