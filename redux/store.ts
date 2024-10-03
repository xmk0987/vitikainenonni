import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import projectsReducer from "./projectsSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
