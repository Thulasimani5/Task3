import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './reducers/ExpenseSlice';

const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
});

export default store;
