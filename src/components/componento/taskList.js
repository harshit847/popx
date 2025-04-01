import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/taskSlice";
import "./taskList.css"

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      {tasks.length === 0 ? <p>No tasks added yet.</p> : (
        tasks.map((task) => (
          <div key={task.id} className="task-item">
            <span>{task.text} ({task.priority})</span>
            <button onClick={() => dispatch(deleteTask(task.id))}>❌</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
