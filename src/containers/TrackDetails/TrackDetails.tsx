import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/hooks";
import { NewTrack } from "../../interfaces/interfaces";
import classes from "./TrackDetails.module.css";

interface TrackDetailsParams {
  id: string;
}

const TrackDetails: React.FC = () => {
  const { tracks } = useTypedSelector((state) => state.tracks);
  const [trackDetails, setTrackDetails] = useState<NewTrack | null>(null);
  const params = useParams<TrackDetailsParams>();

  useEffect(() => {
    for (let i = 0; i < tracks.length; i++) {
      if (tracks[i].id === params.id) {
        setTrackDetails(tracks[i]);
        break;
      }
    }
  }, []);
  if (!trackDetails) return <p>Track does not exist</p>;
  return (
    <div className={classes.TrackDetails}>
      <p>{`UserId: ${trackDetails?.userId}`}</p>
      <p>{`Name: ${trackDetails?.userName}`}</p>
      <p>{`Time: ${trackDetails?.time}`}</p>
      <p>{`Note: ${trackDetails?.note}`}</p>
    </div>
  );
};

export default TrackDetails;
