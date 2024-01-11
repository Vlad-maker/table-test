import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// тип для состояния приложения
type AppState = {
  dataLength: number;
  loading: boolean;
  shortData: string | string[];
  longData: string | string[] | any;
  personData: string | string[];
  buttons: any;
};

const initialState: AppState = {
  dataLength: 50,
  loading: true,
  shortData: [],
  longData: [],
  personData: "",
  buttons: [],
};

const appSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataLength: (state, action: PayloadAction<number>) => {
      state.dataLength = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setShortData: (state, action: PayloadAction<string | string[]>) => {
      state.shortData = action.payload;
    },
    setLongData: (state, action: PayloadAction<string | string[] | any>) => {
      state.longData = state.shortData.slice(
        action.payload.pageLimit * action.payload.currentPage,
        action.payload.pageLimit * (action.payload.currentPage + 1)
      );
    },
    setPersonData: (state, action: PayloadAction<string | string[]>) => {
      action.payload !== ""
        ? (state.personData = state.longData.filter(
            (person: { id: string }) => person.id === action.payload
          ))
        : (state.personData = "");
    },
    setPaginationBtn: (state) => {
      state.buttons = new Array(Math.ceil(state.longData.length / 50)).fill(
        "buttons"
      );
    },
  },
});

export const {
  setDataLength,
  setLoading,
  setShortData,
  setLongData,
  setPersonData,
  setPaginationBtn,
} = appSlice.actions;

export default appSlice.reducer;
