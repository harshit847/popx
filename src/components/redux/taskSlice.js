import { createSlice } from "@reduxjs/toolkit";

// Load tasks from localStorage
const loadTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: loadTasks(),
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
