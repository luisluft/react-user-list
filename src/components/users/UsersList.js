import React from "react";
import Card from "../ui/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  if (props.users.length !== 0)
    return (
      <Card className={classes.users}>
        <ul>
          {props.users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
            );
          })}
        </ul>
      </Card>
    );
  return 0;
};

export default UsersList;
