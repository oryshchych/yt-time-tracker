import React from "react";
import classes from "./TrackItem.module.css";
import { NewTrack } from "../../interfaces/interfaces";
import { useHistory } from "react-router-dom";

interface TrackItemProps {
  track: NewTrack;
}

export const TrackItem: React.FC<TrackItemProps> = (props) => {
  const history = useHistory();
  const linkToTrackDetails = () => {
    history.push(`/track-details/${props.track.id}`);
  };
  return (
    <div className={classes.TrackItem} onClick={linkToTrackDetails}>
      <div className={classes.UserId}>{`UserId: ${props.track.userId}`}</div>
      <div className={classes.UserName}>{`${props.track.userName}`}</div>
      <div className={classes.Time}>{`Time: ${props.track.time}`}</div>{" "}
    </div>
  );
};
