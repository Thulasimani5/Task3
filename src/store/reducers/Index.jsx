import { combineReducers } from 'redux';
import expenseReducer from './ExpenseSlice';

const rootReducer = combineReducers({
  expenses: expenseReducer, 
});

export default rootReducer;
