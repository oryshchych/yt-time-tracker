import React, { useState, useEffect } from "react";
import { useTypedSelector } from "../../hooks/hooks";
import classes from "./Tracker.module.css";
import { NewTrackNote } from "../../components/NewTrackNote/NewTrackNote";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../store/actions/users";
import { SelectDropdown } from "../../components/SelectDropdown/SelectDropdown";

export const Tracker: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.users);
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === +userId) {
        setUserName(users[i].name);
        break;
      }
    }
  }, [userId]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={classes.Tracker}>
      <SelectDropdown
        value={userId}
        options={users}
        onChange={onChangeHandler}
      />
      <NewTrackNote
        show={userId ? true : false}
        userData={{ id: +userId, name: userName }}
      />
    </div>
  );
};

export default Tracker;
