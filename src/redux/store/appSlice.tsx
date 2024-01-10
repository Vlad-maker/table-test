import { createSlice } from "@reduxjs/toolkit";

// тип для состояния приложения
type AppState = {};

const initialState: AppState = {};

const appSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;

export default appSlice.reducer;
