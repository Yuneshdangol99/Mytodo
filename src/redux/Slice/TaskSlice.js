import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  taskCounter: 1,
};

export const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action) => {
      // state.tasks.push(action.payload);
      const newtask = {
        id: state.taskCounter,
        task: action.payload.task,
      };
      state.tasks.push(newtask);
      state.taskCounter += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTasks } = TaskSlice.actions;

export default TaskSlice.reducer;
