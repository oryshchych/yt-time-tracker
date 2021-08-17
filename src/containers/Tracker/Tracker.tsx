import React, { useEffect } from "react";
import { connect } from "react-redux";
import { User } from "../../interfaces/users";
import classes from "./Tracker.module.css";
import * as actions from "../../store/actions/actions";

interface TrackerProps {
  users: User[];
  fetchUsers: Function;
  history: any;
}

export const Tracker = (props: TrackerProps) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);
  return (
    <div className={classes.Tracker}>
      <h1>Please select a user:</h1>
      <select className={classes.Dropdown}>
        {props.users.map((user) => {
          return (
            <option key={user.id} value="user.id" className={classes.Option}>
              {user.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchUsers: () => dispatch(actions.fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracker);
