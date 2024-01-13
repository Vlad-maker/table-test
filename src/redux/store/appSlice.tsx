import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Person {
  id: number;
  address: {
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
  };
  city: string;
  state: string;
  streetAddress: string;
  zip: string;
  description: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}

// Pick - Выбираем из интерфейса свойства и их типы
// keyof - Выбираем только ключи из полученного интерфейса

type SortKeys = keyof Pick<
  Person,
  "id" | "email" | "firstName" | "lastName" | "phone"
>;

interface AppState {
  page: number;
  dataLength: number;
  loading: boolean;
  shortData: string | string[];
  longData: Person[];
  personId: Person["id"] | null;
  buttons: any[];
  sortBy: {} | string | string[] | any;
}

const initialState: AppState = {
  page: 1,
  dataLength: 50,
  loading: true,
  shortData: [],
  longData: [],
  personId: null,
  buttons: [],
  sortBy: { id: false, firstName: false, lastName: false },
};

const appSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setDataLength: (state, action: PayloadAction<number>) => {
      state.dataLength = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setShortData: (state, action: PayloadAction<string | string[]>) => {
      state.shortData = action.payload;
    },
    setPersonId: (state, action: PayloadAction<AppState["personId"]>) => {
      state.personId = action.payload;
    },
    setLongData: (state, action: PayloadAction<Person[]>) => {
      state.longData = action.payload;
    },
    setPaginationBtn: (state) => {
      state.buttons = new Array(Math.ceil(state.longData.length / 50)).fill(
        "buttons"
      );
    },
    setNewPerson: (state, action) => {
      let copy = { ...action.payload };
      state.longData.unshift(copy);
    },
    sortData: (state, action: PayloadAction<SortKeys>) => {
      switch (action.payload) {
        case "id": {
          if (state.sortBy.id) {
            state.longData = state.longData.sort(
              (prev, next) => prev.id - next.id
            );
          } else if (!state.sortBy.id) {
            state.longData = state.longData.sort(
              (prev, next) => next.id - prev.id
            );
          }
          state.sortBy.id = !state.sortBy.id;
          break;
        }
        case "firstName": {
          if (state.sortBy.firstName) {
            state.longData = state.longData.sort((prev, next) =>
              prev.firstName.localeCompare(next.firstName)
            );
          } else if (!state.sortBy.firstName) {
            state.longData = state.longData.sort((prev, next) =>
              next.firstName.localeCompare(prev.firstName)
            );
          }
          state.sortBy.firstName = !state.sortBy.firstName;
          break;
        }
        case "lastName": {
          if (state.sortBy.lastName) {
            state.longData = state.longData.sort((prev, next) =>
              prev.lastName.localeCompare(next.lastName)
            );
          } else if (!state.sortBy.lastName) {
            state.longData = state.longData.sort((prev, next) =>
              next.lastName.localeCompare(prev.lastName)
            );
          }
          state.sortBy.lastName = !state.sortBy.lastName;
          break;
        }
        case "email": {
          if (state.sortBy.email) {
            state.longData = state.longData.sort((prev, next) =>
              prev.email.localeCompare(next.email)
            );
          } else if (!state.sortBy.email) {
            state.longData = state.longData.sort((prev, next) =>
              next.email.localeCompare(prev.email)
            );
          }
          state.sortBy.email = !state.sortBy.email;
          break;
        }
        case "phone": {
          if (state.sortBy.phone) {
            state.longData = state.longData.sort((prev, next) =>
              prev.phone.localeCompare(next.phone)
            );
          } else if (!state.sortBy.phone) {
            state.longData = state.longData.sort((prev, next) =>
              next.phone.localeCompare(prev.phone)
            );
          }
          state.sortBy.phone = !state.sortBy.phone;
          break;
        }
      }
    },
  },
});

export const {
  setPage,
  setDataLength,
  setLoading,
  sortData,
  setShortData,
  setLongData,
  setPersonId,
  setPaginationBtn,
  setNewPerson,
} = appSlice.actions;

export default appSlice.reducer;
