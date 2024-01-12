import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// тип для состояния приложения
type AppState = {
  dataLength: number;
  loading: boolean;
  shortData: string | string[];
  longData: string | string[] | any;
  personData: string | string[] | any;
  buttons: any[];
  sortBy: {} | string | string[] | any;
};

const initialState: AppState = {
  dataLength: 50,
  loading: true,
  shortData: [],
  longData: [],
  personData: "",
  buttons: [],
  sortBy: { id: false, firstName: false, lastName: false },
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
        action.payload.limit * action.payload.page,
        action.payload.limit * (action.payload.page + 1)
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
    sortData: (state, action: PayloadAction<string | string[]>) => {
      if (action.payload === "id") {
        if (state.sortBy.id) {
          state.longData = state.longData.sort(
            (
              prev: {
                id: number;
                prev: "string";
              },
              next: {
                id: number;
                next: "string";
              }
            ) => prev.id - next.id
          );
        } else if (!state.sortBy.id) {
          state.longData = state.longData.sort(
            (
              prev: {
                id: number;
                prev: "string";
              },
              next: {
                id: number;
                b: "string";
              }
            ) => next.id - prev.id
          );
        }
        state.sortBy.id = !state.sortBy.id;
      } else if (action.payload === "firstName") {
        if (state.sortBy.firstName) {
          state.longData = state.longData.sort(
            (
              prev: {
                firstName: string;
                prev: "string";
              },
              next: {
                firstName: string;
                next: "string";
              }
            ) => prev.firstName.localeCompare(next.firstName)
          );
        } else if (!state.sortBy.firstName) {
          state.longData = state.longData.sort(
            (
              prev: {
                firstName: string;
                prev: "string";
              },
              next: {
                firstName: string;
                next: "string";
              }
            ) => next.firstName.localeCompare(prev.firstName)
          );
        }
        state.sortBy.firstName = !state.sortBy.firstName;
      } else if (action.payload === "lastName") {
        if (state.sortBy.lastName) {
          state.longData = state.longData.sort(
            (
              prev: {
                lastName: string;
                prev: "string";
              },
              next: {
                lastName: string;
                next: "string";
              }
            ) => prev.lastName.localeCompare(next.lastName)
          );
        } else if (!state.sortBy.lastName) {
          state.longData = state.longData.sort(
            (
              prev: {
                lastName: string;
                prev: "string";
              },
              next: {
                lastName: string;
                next: "string";
              }
            ) => next.lastName.localeCompare(prev.lastName)
          );
        }
        state.sortBy.lastName = !state.sortBy.lastName;
      } else if (action.payload === "email") {
        if (state.sortBy.email) {
          state.longData = state.longData.sort(
            (
              prev: {
                email: string;
                prev: "string";
              },
              next: {
                email: string;
                next: "string";
              }
            ) => prev.email.localeCompare(next.email)
          );
        } else if (!state.sortBy.email) {
          state.longData = state.longData.sort(
            (
              prev: {
                email: string;
                prev: "string";
              },
              next: {
                email: string;
                next: "string";
              }
            ) => next.email.localeCompare(prev.email)
          );
        }
        state.sortBy.email = !state.sortBy.email;
      } else if (action.payload === "phone") {
        if (state.sortBy.phone) {
          state.longData = state.longData.sort(
            (
              prev: {
                phone: string;
                prev: "string";
              },
              next: {
                phone: string;
                next: "string";
              }
            ) => prev.phone.localeCompare(next.phone)
          );
        } else if (!state.sortBy.phone) {
          state.longData = state.longData.sort(
            (
              prev: {
                phone: string;
                prev: "string";
              },
              next: {
                phone: string;
              }
            ) => next.phone.localeCompare(prev.phone)
          );
        }
        state.sortBy.phone = !state.sortBy.phone;
      } else return console.log("error");
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
  sortData,
} = appSlice.actions;

export default appSlice.reducer;
