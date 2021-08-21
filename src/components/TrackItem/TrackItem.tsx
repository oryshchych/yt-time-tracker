import React from "react";
import classes from "./TrackItem.module.css";
import { NewTrack } from "../../interfaces/interfaces";

interface TrackItemProps {
  track: NewTrack;
}

export const TrackItem: React.FC<TrackItemProps> = (props) => {
  return (
    <div className={classes.TrackItem}>
      <div className={classes.UserId}>{`UserId: ${props.track.userId}`}</div>
      <div className={classes.UserName}>{`${props.track.userName}`}</div>
      <div className={classes.Time}>{`Time: ${props.track.time}`}</div>{" "}
    </div>
  );
};
