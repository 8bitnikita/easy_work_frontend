import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vacancies: [],
};

const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    getVacancies(state, action) {
      state.vacancies = [...action.payload, ...state.vacancies];
    },
  },
});

export default vacanciesSlice.reducer;

export const { getVacancies } = vacanciesSlice.actions;
