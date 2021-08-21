import React from "react";
import classes from "./TrackList.module.css";
import { useTypedSelector } from "../../hooks/hooks";
import { TrackItem } from "../../components/TrackItem/TrackItem";

const TrackList: React.FC = () => {
  const { tracks } = useTypedSelector((state) => state.tracks);

  return (
    <div className={classes.TrackList}>
      <p>Here we can see all track notes of our users:</p>
      {tracks.map((track) => {
        return <TrackItem track={track} key={track.id} />;
      })}
    </div>
  );
};

export default TrackList;
