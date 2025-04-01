import React from "react";
import TaskInput from "../componento/taskInput";
import TaskList from "../componento/taskList";
import "./account.css"

const Account = () => {
  return (
    <div className="account-page">
      <h2>My Account</h2>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Account;
