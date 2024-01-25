import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/todoListSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
