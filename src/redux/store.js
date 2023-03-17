import { configureStore } from '@reduxjs/toolkit'
import vacanciesSlice from './reducers/vacanciesSlice'

export const store = configureStore({
  reducer: {
    vacancies: vacanciesSlice,
  },
})
