import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  taskCounter: 1,
  isOverlayVisible: false,
};

export const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action) => {
      const newtask = {
        id: state.taskCounter,
        task: action.payload.task,
      };
      state.tasks.push(newtask);
      state.taskCounter += 1;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    ShowOverlay: (state) => {
      state.isOverlayVisible = true;
    },
    hideoverlay: (state) => {
      state.isOverlayVisible = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTasks, deleteTask, ShowOverlay, hideoverlay } =
  TaskSlice.actions;

export default TaskSlice.reducer;
