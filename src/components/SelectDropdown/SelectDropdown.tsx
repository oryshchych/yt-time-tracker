import React, { Fragment } from "react";
import classes from "./SelectDropdown.module.css";

interface SelectDropdownTypes {
  value: string;
  options: any[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectDropdown: React.FC<SelectDropdownTypes> = (props) => {
  return (
    <Fragment>
      <h1>Please select a user:</h1>
      <select
        className={classes.Dropdown}
        onChange={props.onChange}
        value={props.value}
      >
        <option value=""></option>
        {props.options.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </Fragment>
  );
};
