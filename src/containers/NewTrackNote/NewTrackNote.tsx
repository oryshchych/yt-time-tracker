import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NewTrack } from "../../interfaces/interfaces";
import { addNewTrack } from "../../store/actions/tracks";

interface NewTrackProps {
  userData: {
    id: number;
    name: string;
  };
  show: boolean;
}

export const NewTrackNote: React.FC<NewTrackProps> = (props) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (e.target.id) {
      case "time":
        setTime(e.target.value);
        break;
      case "note":
        setNote(e.target.value);
        break;
    }
  };
  const onSubmitHandler = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const newTrack = {
      userId: props.userData.id,
      userName: props.userData.name,
      time: time,
      note: note,
    };
    dispatch(addNewTrack(newTrack));
  };
  if (props.show) {
    return (
      <form onSubmit={onSubmitHandler}>
        <p>Name: {props.userData.name}</p>
        <p>Id: {props.userData.id}</p>

        <label htmlFor="time">
          The amount of time the user spent on a project
        </label>
        <input type="text" id="time" value={time} onChange={onChangeHandler} />
        <label htmlFor="note">
          A note about the project the user worked on
        </label>
        <textarea
          id="note"
          cols={30}
          rows={10}
          value={note}
          onChange={onChangeHandler}
        ></textarea>
        <input type="submit" value="Save" />
      </form>
    );
  } else return null;
};

export default NewTrackNote;
